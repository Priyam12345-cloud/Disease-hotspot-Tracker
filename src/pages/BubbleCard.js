import * as React from "react";
import styles from './BubbleCard.module.css';

export default function BubbleCard() {
  return (
    <article className={styles.cardContainer}>
      <section className={styles.glassEffect}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4987c349c5f341ba280c1f4bebe866da2c515e24b48f5773a7dbe2e26064490a?placeholderIfAbsent=true&apiKey=dad5171c117940cab9a2da99092bd1e3"
          className={styles.bubbleImage}
          alt="Bubble card decorative element"
        />
      </section>
    </article>
  );
}