/**
 * Base TrieNode.
 */
class TrieNode {
  /**
   * TrieNode constructor that requires a value.
   * @param value the node value (single character).
   */
  public isWord: boolean = false;
  public children: Map<string, TrieNode>;

  constructor(public value: string) {
    if (value.length > 1)
      throw new Error("TrieNode value should not contain multiple characters");

    this.children = new Map();
  }
}

/**
 * Regular Trie implementation with linked lists.
 */
export class Trie {
  private root: TrieNode;

  /**
   * Create the Trie from an optional list of words.
   * @param words list of words (optional).
   */
  constructor(words: string[] = []) {
    this.root = new TrieNode("");

    for (const word of words) this.add(word);
  }

  /**
   * Add a word to the Trie, igoring strings that already exists.
   * @param word the word to be added.
   * @returns a reference to the Trie instance.
   */
  public add(word: string): Trie {
    if (!word) return this;

    let node = this.root;

    for (const c of word) {
      const child = node.children.get(c);
      if (child) {
        node = child;
        continue;
      }

      const newChild = new TrieNode(c);
      node.children.set(c, newChild);
      node = newChild;
    }

    node.isWord = true;

    return this;
  }

  /**
   * Remove a word if it exists.
   * @param word the word to be removed.
   * @returns a reference to this Trie instance.
   */
  public remove(word: string): Trie {
    let node = this.root;
    let lastBifurcation = { node, character: word[0] || "" };

    for (const c of word) {
      const child = node.children.get(c);
      if (!child) return this;

      if (node.children.size > 1) lastBifurcation = { node, character: c };

      node = child;
    }

    if (node.isWord)
      lastBifurcation.node.children.delete(lastBifurcation.character);

    return this;
  }

  /**
   * Checks if a word exists in the Trie.
   * @param word the word to be checked.
   * @returns a reference to this Trie instance.
   */
  public has(word: string): boolean {
    return !!this.getLastMatch(word)?.isWord;
  }

  /**
   * Get a list of all words in the Trie that start with the given string.
   * If passed an empty string, all the words are returned.
   * @example getAllStartingWith(car) -> [car, cart, card, carousel]
   * @param word the word that starts the sequence.
   * @returns all words that start with the given string.
   */
  public getAllStartingWith(word: string): string[] {
    if (!this.root.children.size) return [];

    const words: string[] = [];
    const node = this.getLastMatch(word);
    if (!node) return [];

    const stack = [{ node, word }];

    for (let e = stack.pop(); e; e = stack.pop()) {
      if (e.node.isWord) words.push(e.word);

      for (const [, child] of e.node.children)
        stack.push({ node: child, word: e.word + child.value });
    }

    return words;
  }

  /**
   * Return the last node wich matchs the given word.
   * If the word sequence differs from the Trie sequence, null is returned.
   * For example, if the word 'cart' is in the Trie, then getLastMatch('car') -> TrieNode('r').
   * @param word the given word.
   * @returns the last node that matchs the word.
   */
  private getLastMatch(word: string): TrieNode | null {
    let node = this.root;

    for (const c of word) {
      const child = node.children.get(c);
      if (!child) return null;

      node = child;
    }

    return node;
  }
}
