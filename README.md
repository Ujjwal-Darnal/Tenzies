## 🚀 Live Demo
https://tenzies-one-xi.vercel.app/

# 🎲 Tenzies Game

A modern React-based implementation of the popular Tenzies dice game where players roll dice until all ten dice display the same value. Players can hold selected dice between rolls and compete to achieve the fastest completion time with the fewest rolls.

This project was developed to strengthen my understanding of React fundamentals, state management, component-based architecture, local storage, and interactive frontend development.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Screenshots](#screenshots)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [How It Works](#how-it-works)
- [What I Learned](#what-i-learned)
- [Known Limitations](#known-limitations)
- [Future Improvements](#future-improvements)
- [License](#license)

---

## Overview

Tenzies is a fast-paced dice game where the objective is to get all ten dice showing the same number.

Players can hold dice they want to keep while rerolling the remaining dice. The game tracks rolls, time, and best scores to encourage replayability and improve player performance.

The project focuses on React concepts including component composition, state management, side effects, local storage, conditional rendering, and user interaction.

---

## Features

- 🎲 Interactive dice rolling gameplay
- 📌 Hold selected dice between rolls
- 🏆 Automatic win detection
- ⏱️ Live timer tracking
- 🔄 Roll counter
- 💾 Best score saved using local storage
- 🎉 Winning celebration animation
- 📱 Responsive user interface
- ⚡ Real-time updates using React state

---

## 📸 Screenshots

### Game Interface

![Tenzies Game](images/game-screen.png)

### Winning State

![Winning State](images/winning-screen.png)

---

## Project Structure

```bash
Tenzies/
├── public/
├── src/
│   ├── components/
│   ├── App.jsx
│   ├── main.jsx
│   ├── App.css
│   └── index.css
├── images/
│   ├── game-screen.png
│   └── winning-screen.png
├── package.json
├── vite.config.js
└── README.md
```

---

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

1. Clone the repository

```bash
git clone https://github.com/Ujjwal-Darnal/Tenzies.git
```

2. Navigate to the project folder

```bash
cd Tenzies
```

3. Install dependencies

```bash
npm install
```

4. Start the development server

```bash
npm run dev
```

5. Open your browser at:

```txt
http://localhost:5173
```

---

## Usage

1. Click **Roll** to generate random dice values
2. Click individual dice to hold their current values
3. Continue rolling until all dice show the same number
4. The game automatically detects a win
5. Try to achieve the best time with the fewest rolls

---

## Technologies Used

| Technology | Purpose |
|------------|---------|
| React | Component-based UI development |
| JavaScript (ES6+) | Application logic |
| Vite | Development and build tooling |
| CSS3 | Styling and responsive design |
| React Hooks | State and side-effect management |
| Local Storage API | Best score persistence |
| React Confetti | Win celebration animation |

---

## How It Works

### Dice Generation

The application generates ten random dice values and stores them in React state.

### Hold Mechanism

Players can click individual dice to lock their values while rerolling the remaining dice.

### Roll Functionality

When the Roll button is clicked, only unheld dice receive new random values.

### Win Detection

The game continuously checks whether all dice are held and share the same value. Once the condition is met, the player wins.

### Score Tracking

The application tracks:

- Number of rolls
- Completion time
- Best score

Best scores are stored using local storage so they persist between browser sessions.

---

## What I Learned

Through this project, I improved my understanding of:

- React components
- React Hooks (`useState`, `useEffect`)
- State management
- Conditional rendering
- Event handling
- Local storage integration
- Component communication through props
- Interactive game development
- Building reusable UI components

---

## Known Limitations

- Single-player only
- No online leaderboard
- Limited game customization
- Best scores are stored locally per browser

---

## Future Improvements

- 🌍 Online leaderboard
- 🏅 Achievement system
- 🎨 Theme customization
- 🌙 Dark mode
- 📊 Detailed game statistics
- 👥 Multiplayer support
- 🔊 Sound effects and music

---

