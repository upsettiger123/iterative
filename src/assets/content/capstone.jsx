export const testing = "Now that there is an actual app built out with device specific interactions and slightly different UI, further user testing likely will produce different critiques than in our previous user testing trials with just the Figma. We then can further iterate on our design to make a more user friendly and effective app."
export const deploy = "When fully deployed on the expo store, specific devices will block the download of the app in Expo Go through a QR code. Android fully allows these types of actions and the app is therefore fully public on Android, but iOS does not. For our capstone, we decided to not further pursue deployment to iOS in addition to Android because Apple is much stricter on apps only being published through their App Store, which costs $99. However, if we want the app to be accessible to more users, we’d want it to be downloadable by both types of mobile phones."
export const backend = "To make our project a more fully developed app, it needs both a frontend and a backend. Without backend services, everything in the UI is static without a true recommendation algorithm or real users. This would also mean that we build out the profile creation flow detailed in our Figma, because accounts can actually be created and stored. We would build out messaging and profile reaction functionality so the app can become usable for its original purpose."

export const nextSteps = {
    content: {
      rightSubtitle: "More User Testing",
      rightText: testing,
      midSubtitle: "Deploying to iOS",
      midText: deploy,
      leftSubtitle: "Creating Backend Services",
      leftText: backend,
    },
};