import React, { useState, useEffect } from "react";
import MoodSelector from "./MoodSelector";
import MoodHistory from "./MoodHistory";
import type { Mood, MoodEntry } from "./types";

// PREDEFINED_MOODS array remains the same as before...
const PREDEFINED_MOODS: Mood[] = [
	// ... (keep the full list from the previous TS example) ...
	{ name: "happy", emoji: "😊", color: "#4CAF50" },
	{ name: "excited", emoji: "🤩", color: "#FFC107" },
	{ name: "motivated", emoji: "💪", color: "#FF9800" },
	{ name: "energetic", emoji: "⚡", color: "#CDDC39" },
	{ name: "calm", emoji: "🧘", color: "#80DEEA" },
	{ name: "hopeful", emoji: "🤞", color: "#AED581" },
	{ name: "confident", emoji: "😎", color: "#FFD700" },
	{ name: "relaxed", emoji: "😌", color: "#03A9F4" },
	{ name: "proud", emoji: "🥳", color: "#E91E63" },
	{ name: "focused", emoji: "🎯", color: "#3F51B5" },
	{ name: "inspired", emoji: "💡", color: "#009688" },
	{ name: "peaceful", emoji: "🕊️", color: "#87CEEB" },
	{ name: "refreshed", emoji: "💧", color: "#AFEEEE" },
	{ name: "rested", emoji: "🛌", color: "#B2DFDB" },
	{ name: "sad", emoji: "😢", color: "#2196F3" },
	{ name: "depressed", emoji: "😔", color: "#0D47A1" },
	{ name: "anxious", emoji: "😟", color: "#FF7043" },
	{ name: "angry", emoji: "😠", color: "#F44336" },
	{ name: "irritable", emoji: "😤", color: "#D32F2F" },
	{ name: "scared", emoji: "😨", color: "#A9A9A9" },
	{ name: "nervous", emoji: "😬", color: "#FFA726" },
	{ name: "frustrated", emoji: "😫", color: "#795548" },
	{ name: "lonely", emoji: "👤", color: "#607D8B" },
	{ name: "overwhelmed", emoji: "🤯", color: "#7B1FA2" },
	{ name: "dizzy", emoji: "😵", color: "#FFEB3B" },
	{ name: "tired", emoji: "😴", color: "#BDBDBD" },
	{ name: "drained", emoji: "😩", color: "#9E9E9E" },
	{ name: "foggy", emoji: "🌫️", color: "#CFD8DC" },
	{ name: "numb", emoji: "🧊", color: "#E0E0E0" },
	{ name: "restless", emoji: "🏃💨", color: "#FF8A65" },
	{ name: "empty", emoji: "⚫", color: "#616161" },
	{ name: "jumpy", emoji: "🤸", color: "#FFB74D" },
];

const LOCAL_STORAGE_KEY = "moodTrackerHistory_v3_ts_daily"; // New key for new logic

// Helper function to get the date part (YYYY-MM-DD) in local timezone
const getLocalDateKey = (date: Date): string => {
	// 'en-CA' locale reliably gives YYYY-MM-DD format
	return date.toLocaleDateString("en-CA");
};

const App: React.FC = () => {
	const [moodHistory, setMoodHistory] = useState<MoodEntry[]>(() => {
		const savedHistory = localStorage.getItem(LOCAL_STORAGE_KEY);
		if (savedHistory) {
			try {
				const parsedData = JSON.parse(savedHistory);
				if (Array.isArray(parsedData)) {
					// Ensure data is sorted on load (newest first)
					const typedData = parsedData as MoodEntry[];
					typedData.sort(
						(a, b) =>
							new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
					);
					return typedData;
				}
				console.warn("Stored mood history is not an array.");
				return [];
			} catch (error) {
				console.error("Failed to parse mood history:", error);
				return [];
			}
		}
		return [];
	});

	useEffect(() => {
		// Save sorted history
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(moodHistory));
	}, [moodHistory]);

	const handleMoodSelected = (selectedMood: Mood) => {
		const now = new Date();
		const todayKey = getLocalDateKey(now); // Get YYYY-MM-DD for today

		// Find if an entry for today already exists
		const indexToday = moodHistory.findIndex(
			(entry) => getLocalDateKey(new Date(entry.timestamp)) === todayKey
		);

		let updatedHistory: MoodEntry[];

		const newEntry: MoodEntry = {
			...selectedMood,
			timestamp: now.toISOString(), // Use current time for the update/creation
			id: Date.now(), // Use current timestamp as ID (will change on update)
		};

		if (indexToday !== -1) {
			// --- UPDATE existing entry for today ---
			// Create a new array with the updated entry, replacing the old one
			updatedHistory = moodHistory.map((entry, index) =>
				index === indexToday ? newEntry : entry
			);
			// No need to sort here as relative order of days doesn't change on update
		} else {
			// --- ADD new entry for today ---
			// Add the new entry and then sort the whole array by date (newest first)
			updatedHistory = [...moodHistory, newEntry];
			updatedHistory.sort(
				(a, b) =>
					new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
			);
		}

		setMoodHistory(updatedHistory);
	};

	// Determine if a mood can be selected (only useful if we want to disable buttons, but logic handles it)
	// const canSelectMoodToday = true; // Logic now handles update/add automatically

	return (
		<div className='min-h-screen bg-gradient-to-br from-blue-50 via-gray-50 to-green-50 py-8 px-4'>
			<div className='max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8'>
				<header className='text-center mb-8 md:mb-12'>
					<h1 className='text-3xl sm:text-4xl font-bold text-gray-800'>
						How are you feeling today?
					</h1>
					<p className='text-gray-500 mt-2'>
						Select your mood (you can update it until midnight)
					</p>
				</header>

				<main className='space-y-10 md:space-y-12'>
					{/* Pass PREDEFINED_MOODS and the updated handler */}
					<MoodSelector
						moods={PREDEFINED_MOODS}
						onMoodSelected={handleMoodSelected}
						// Optionally disable if needed, but logic prevents adding for past days
						// disabled={!canSelectMoodToday}
					/>
					<MoodHistory history={moodHistory} />
				</main>

				<footer className='text-center mt-10 md:mt-12 text-xs text-gray-400'>
					Mood data is saved in your browser's local storage. One entry per day.
				</footer>
			</div>
		</div>
	);
};

export default App;
