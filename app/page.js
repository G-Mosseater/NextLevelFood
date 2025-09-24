import Link from "next/link";
import styles from "./page.module.css";
import ImageSlideshow from "@/components/images/image-slideshow";
export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.slideshow}>
          <ImageSlideshow />
        </div>
        <div>
          <div className={styles.hero}>
            <h1>Cooking Is Cheaper Than Therapy</h1>
            <p>Join us before your sadness turns into instant noodles again.</p>
          </div>
          <div className={styles.cta}>
            <Link href="/href"> Join Community</Link>
            <Link href="/meals">Explore Meals</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={styles.section}>
          <h2>How it works</h2>
          <p>
            NextLevel Food is where your taste buds go on vacation without
            leaving your kitchen. Share your secret recipes, or just marvel at
            other people’s culinary wizardry.
          </p>
          <p>
            From pancakes that could make angels jealous to tacos that could
            start revolutions, NextLevel Food helps you discover dishes that
            make your stomach do a happy dance.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Why NextLevel Food?</h2>
          <p>
            Because life is too short for boring meals! NextLevel Food is your
            backstage pass to foodie fame, where your cookies might just get
            more likes than your selfies.
          </p>
          <p>
            Connect with fellow food adventurers, swap cooking secrets, and
            maybe even learn why your toast always burns on one side. Your taste
            buds will thank you.
          </p>
        </section>
      </main>
    </>
  );
}
