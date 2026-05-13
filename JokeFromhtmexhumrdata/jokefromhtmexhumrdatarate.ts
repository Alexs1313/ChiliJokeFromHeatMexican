export type JokeFromhtmexhumrRatePhrase = {
  title: string;
  body: string;
  score: number;
};

/** “Good” verdict lines for Rate My Jokes. */
export const jokefromhtmexhumrRateGoodPhrases: JokeFromhtmexhumrRatePhrase[] =
  [
    {
      title: '¡CALIENTE! 🔥',
      body: "¡Ay, caramba! This joke has more heat than my cousin's salsa and that stuff burned through a cutting board.\n\nRespect, amigo!",
      score: 10,
    },
    {
      title: '¡MUY BIEN! 🌟',
      body: 'Spicy, clever, and served fresh.\n\nMiguel approves. The crowd is chanting your name (and also asking for guacamole).',
      score: 9,
    },
  ];

/** “Bad” verdict lines for Rate My Jokes. */
export const jokefromhtmexhumrRateBadPhrases: JokeFromhtmexhumrRatePhrase[] =
  [
    {
      title: '¡AY, NO! 🙈',
      body: 'I am not angry. I am... disappointed.\nLike when you open a tamale and it is plain masa.\nNo filling. Just sadness.\n\nThis joke is that tamale.',
      score: 1,
    },
    {
      title: 'OOF… 🌧️',
      body: 'Even my sombrero sighed.\n\nTry again, amigo — this one needs more spice and a better punchline.',
      score: 2,
    },
  ];

/** WebView HTML for the loading animation on the rate screen. */
export const jokefromhtmexhumrRateLoaderHtml = `  <!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          html,
          body {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            background: transparent;
            overflow: hidden;
          }

          body {
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .dots-container {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            width: 100%;
          }

          .dot {
            height: 20px;
            width: 20px;
            margin-right: 10px;
            border-radius: 10px;
            background-color: #b3d4fc;
            animation: pulse 1.5s infinite ease-in-out;
          }

          .dot:last-child {
            margin-right: 0;
          }

          .dot:nth-child(1) {
            animation-delay: -0.3s;
          }

          .dot:nth-child(2) {
            animation-delay: -0.1s;
          }

          .dot:nth-child(3) {
            animation-delay: 0.1s;
          }

          @keyframes pulse {
            0% {
              transform: scale(0.8);
              background-color:#8E572C;
              box-shadow: 0 0 0 0 rgba(228, 171, 75, 1);
            }

            50% {
              transform: scale(1.2);
              background-color:#C28C3F;
              box-shadow: 0 0 0 10px rgba(228, 172, 75, 0.05);
            }

            100% {
              transform: scale(0.8);
              background-color:#E4AB4B;
              box-shadow: 0 0 0 0 rgba(228, 172, 75, 0.33)
            }
          }
        </style>
      </head>

      <body>
        <section class="dots-container">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </section>
      </body>
    </html>`;
