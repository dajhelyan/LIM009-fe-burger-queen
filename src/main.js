const init = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyCchcYDudOrbctZcvvNAEtl0ei8m_dLBFQ",
        authDomain: "team-burger-queen.firebaseapp.com",
        databaseURL: "https://team-burger-queen.firebaseio.com",
        projectId: "team-burger-queen",
        storageBucket: "team-burger-queen.appspot.com",
        messagingSenderId: "159729991919",
        appId: "1:159729991919:web:d363e612f34d72a1"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
}