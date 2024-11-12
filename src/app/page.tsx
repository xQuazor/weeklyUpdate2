"use client"

import styles from "./page.module.scss";
import Cube from "@/cube/cube";
export default function Home() {
  const quotes = [
    "Everything hurts until you decide it doesn’t. You carry the weight, but you choose how heavy it feels.",
    "It’s not that the world is too loud—it’s that we’ve forgotten how to listen to the quiet inside.",
    "You’re always waiting for something, but have you ever just let yourself be here, now, even if it’s messy?",
    "The universe doesn’t owe you a purpose. But somewhere between the stars and your heartbeat, you’ll find one.",
    "Sometimes you have to fall apart completely just to see how the pieces can fit back differently.",
    "Healing isn’t about becoming someone else. It’s about remembering who you’ve been all along.",
    "The void isn’t there to consume you. It’s there to remind you that even emptiness can be filled.",
    "You spend your whole life running from feelings, but what if feeling them is the only way to stop the chase?",
    "Hope isn’t a feeling. It’s a decision. You make it every time you get out of bed, even when it feels impossible.",
    "You are not broken. You are in progress. It’s not the end, it’s just the space between chapters.",
    "You don’t need to fix everything right now. Sometimes, just breathing through the chaos is enough.",
    "We are stardust with a heartbeat, searching for meaning in the silence between moments.",
    "Being alive is terrifying, and yet, here you are—alive despite the fear, loving despite the scars.",
    "Maybe it’s not about finding peace. Maybe it’s about learning to sit with the storm inside you.",
    "You are made of the same universe that holds galaxies together. Why do you think you’re meant to fall apart?",
    "Everything hurts until you decide it doesn’t. You carry the weight, but you choose how heavy it feels."
  ];
  return (
      <main className={styles.container}>
        <div className={styles.container__quotes}>
          {
            quotes.map((value, index) => {
              return (
                  <div key={index} className={styles.quote}>
                    <p className={styles.qouteFont}>
                      {value}
                    </p>

                  </div>
              )
            })
          }
        </div>
        <Cube/>
      </main>
  );
}

