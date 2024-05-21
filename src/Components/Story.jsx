import React from "react";
import SubStory from "./SubStory";
export default function Story({ activePage, actvieFunction }) {
  return (
    <>
      <div className="w-screen h-fit flex gap-0 flex-col">
        <SubStory
          cartoonNumber={1}
          title={"How We Met!!"}
          story={
            "Aarav and Aanya met on a beautiful spring afternoon at a mutual friend's engagement party in Bangalore. Aarav was initially reluctant to attend, but everything changed when he heard Aanya's laughter. Drawn to her radiant smile, he introduced himself, and they quickly discovered a shared passion for travel and food. They spent the evening in deep conversation, lost in their own world amid the bustling party. By the end of the night, they exchanged numbers, and their first coffee date soon followed. From that moment on, Aarav and Aanya were inseparable, their bond growing stronger with each passing day."
          }
        />

        <SubStory cartoonNumber={2} title={"Our First Date"} 
        story={"Our first date was at a cozy café in Bangalore. Aarav arrived early and chose a table by the window. When Aanya walked in, her smile lit up the room and put Aarav at ease. We talked for hours about our favorite books, travel dreams, and love for new cuisines. Time flew by, and neither of us wanted the date to end.We decided to take a walk in the nearby park, sharing stories and laughing under the stars. It was a magical evening, filled with connection and promise. That first date was the beginning of our beautiful journey together, a day we will always cherish."}/>

        <SubStory cartoonNumber={3} title={"Our First Drive"} story={"Our first drive together was on a beautiful Sunday afternoon. Aarav picked up Aanya, and we headed to the outskirts of Bangalore, enjoying the scenic countryside. With our favorite songs playing, we laughed and shared stories. We stopped by a picturesque lake for a picnic, watching the sunset. That drive marked the start of many adventures together."} />

        {/* <SubStory cartoonNumber={4} title={"Presents"} story={"In the early days of their courtship, Aarav and Aanya found delight in discovering the intricacies of each other's hearts. On a crisp autumn afternoon, Aarav surprised Aanya with a handcrafted journal, its leather cover embossed with her initials. Inside, he had penned heartfelt notes and poetry, a reflection of his admiration for her spirit and creativity.In return, Aanya presented Aarav with a vintage pocket watch, its intricate gears ticking away the moments of their burgeoning romance. Engraved on the back were the words, 'Time stands still in your presence.' It was a symbol of her appreciation for his timeless charm and steadfast presence in her life."} /> */}
<SubStory cartoonNumber={4} title={"Presents"} story={"On a crisp autumn afternoon, Aarav surprised Aanya with a handcrafted journal, its leather cover embossed with her initials. Inside, he had penned heartfelt notes and poetry, a reflection of his admiration for her spirit and creativity.In return, Aanya presented Aarav with a vintage pocket watch, its intricate gears ticking away the moments of their burgeoning romance. Engraved on the back were the words, 'Time stands still in your presence.' It was a symbol of her appreciation for his timeless charm and steadfast presence in her life."}/>
        <SubStory cartoonNumber={5} title={"Preposal"} story={"Under the canopy of a starlit sky, Aarav and Aanya found themselves at their favorite spot by the tranquil lake. With a nervous excitement, Aarav dropped to one knee, a small velvet box in hand, containing a sparkling diamond ring. His words poured forth, expressing his deepest love and the dreams of a future together. With tears of joy, Aanya accepted, sealing their love with a heartfelt kiss, their souls intertwined under the shimmering night sky."} />

        <SubStory cartoonNumber={6} title={"Engaging"} story={"In a moment ripe with anticipation and emotion, Aarav and Aanya found themselves at the threshold of forever. With bated breath and trembling hands, Aarav knelt before Aanya, a glimmering token of his devotion in hand. As she whispered her heartfelt 'Yes', their hearts danced in unison, heralding the beginning of a journey filled with love, laughter, and cherished moments shared between two souls destined to be one."}/>

        <SubStory cartoonNumber={7} title={"Living After"} story={"In the embrace of each sunrise and the whisper of every sunset, Aarav and Aanya found their happiness intertwined. Together, they navigated life's twists and turns with laughter as their compass and love as their guide. In the warmth of their shared moments, they discovered that true joy lies not in grand gestures, but in the quiet, everyday moments spent in each other's company. And so, hand in hand, they journeyed through life, grateful for the simple yet profound happiness found in being together."}/>
      </div>
    </>
  );
}
