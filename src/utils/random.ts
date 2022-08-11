/**
 *　XorShiftアルゴリズムによる疑似乱数生成器です。
 *
 * @see https://ja.wikipedia.org/wiki/Xorshift
 * @see https://neos21.net/blog/2021/12/27-01.html
 */
class Random {
  // パラメータ
  x: number;
  y: number;
  z: number;
  w: number;

  /**
   * 疑似乱数生成パラメータをセットします。
   *
   * @param seed
   */
  constructor(seed: number = 81456813180) {
    this.x = 1145141919;
    this.y = 334;
    this.z = 810;
    this.w = seed;
  }

  /**
   * XorShiftアルゴリズムの実装です。
   *
   * @returns 乱数
   */
  next(): number {
    const t = this.x ^ (this.x << 11);
    this.x = this.y;
    this.y = this.z;
    this.z = this.w;
    return (this.w = this.w ^ (this.w >>> 19) ^ (t ^ (t >>> 8)));
  }

  /**
   * 指定範囲内の乱数を取得します。
   *
   * @param min 最小値
   * @param max 最大値
   * @returns 乱数
   */
  nextInt(min: number, max: number): number {
    const r = Math.abs(this.next());
    return min + (r % (max + 1 - min));
  }
}

export default Random;
