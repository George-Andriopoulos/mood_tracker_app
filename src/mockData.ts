import type { MoodEntry } from "./types";

// Mock data spanning 28 days backwards from April 8, 2025
// Sorted newest first

// Helper to generate dates easily
const createDate = (year: number, month: number, day: number): Date => {
	// Month is 0-indexed in JS Date (0 = January, 11 = December)
	// We'll use a consistent time like 10:00 AM local time for the mock entries
	// Note: The exact hour might shift due to DST, but the date will be correct
	return new Date(year, month - 1, day, 10, 0, 0);
};

export const MOCK_HISTORY_DATA: MoodEntry[] = [
	// Page 1 (Newest)
	{
		id: createDate(2025, 4, 8).getTime(), // Apr 8
		name: "focused",
		emoji: "🎯",
		color: "#3F51B5",
		timestamp: createDate(2025, 4, 8).toISOString(),
	},
	{
		id: createDate(2025, 4, 7).getTime(), // Apr 7
		name: "calm",
		emoji: "🧘",
		color: "#80DEEA",
		timestamp: createDate(2025, 4, 7).toISOString(),
	},
	{
		id: createDate(2025, 4, 6).getTime(), // Apr 6
		name: "tired",
		emoji: "😴",
		color: "#BDBDBD",
		timestamp: createDate(2025, 4, 6).toISOString(),
	},
	{
		id: createDate(2025, 4, 5).getTime(), // Apr 5
		name: "happy",
		emoji: "😊",
		color: "#4CAF50",
		timestamp: createDate(2025, 4, 5).toISOString(),
	},
	{
		id: createDate(2025, 4, 4).getTime(), // Apr 4
		name: "motivated",
		emoji: "💪",
		color: "#FF9800",
		timestamp: createDate(2025, 4, 4).toISOString(),
	},
	{
		id: createDate(2025, 4, 3).getTime(), // Apr 3
		name: "anxious",
		emoji: "😟",
		color: "#FF7043",
		timestamp: createDate(2025, 4, 3).toISOString(),
	},
	{
		id: createDate(2025, 4, 2).getTime(), // Apr 2
		name: "rested",
		emoji: "🛌",
		color: "#B2DFDB",
		timestamp: createDate(2025, 4, 2).toISOString(),
	},
	{
		id: createDate(2025, 4, 1).getTime(), // Apr 1
		name: "excited",
		emoji: "🤩",
		color: "#FFC107",
		timestamp: createDate(2025, 4, 1).toISOString(),
	},
	{
		// Page break after this (8 entries so far, need 2 more for page 1)
		id: createDate(2025, 3, 31).getTime(), // Mar 31
		name: "sad",
		emoji: "😢",
		color: "#2196F3",
		timestamp: createDate(2025, 3, 31).toISOString(),
	},
	{
		id: createDate(2025, 3, 30).getTime(), // Mar 30
		name: "peaceful",
		emoji: "🕊️",
		color: "#87CEEB",
		timestamp: createDate(2025, 3, 30).toISOString(),
	},

	// Page 2
	{
		id: createDate(2025, 3, 29).getTime(), // Mar 29
		name: "frustrated",
		emoji: "😫",
		color: "#795548",
		timestamp: createDate(2025, 3, 29).toISOString(),
	},
	{
		id: createDate(2025, 3, 28).getTime(), // Mar 28
		name: "energetic",
		emoji: "⚡",
		color: "#CDDC39",
		timestamp: createDate(2025, 3, 28).toISOString(),
	},
	{
		id: createDate(2025, 3, 27).getTime(), // Mar 27
		name: "foggy",
		emoji: "🌫️",
		color: "#CFD8DC",
		timestamp: createDate(2025, 3, 27).toISOString(),
	},
	{
		id: createDate(2025, 3, 26).getTime(), // Mar 26
		name: "hopeful",
		emoji: "🤞",
		color: "#AED581",
		timestamp: createDate(2025, 3, 26).toISOString(),
	},
	{
		id: createDate(2025, 3, 25).getTime(), // Mar 25
		name: "lonely",
		emoji: "👤",
		color: "#607D8B",
		timestamp: createDate(2025, 3, 25).toISOString(),
	},
	{
		id: createDate(2025, 3, 24).getTime(), // Mar 24
		name: "confident",
		emoji: "😎",
		color: "#FFD700",
		timestamp: createDate(2025, 3, 24).toISOString(),
	},
	{
		id: createDate(2025, 3, 23).getTime(), // Mar 23
		name: "irritable",
		emoji: "😤",
		color: "#D32F2F",
		timestamp: createDate(2025, 3, 23).toISOString(),
	},
	{
		id: createDate(2025, 3, 22).getTime(), // Mar 22
		name: "relaxed",
		emoji: "😌",
		color: "#03A9F4",
		timestamp: createDate(2025, 3, 22).toISOString(),
	},
	{
		// Page break after this (18 entries so far, need 2 more for page 2)
		id: createDate(2025, 3, 21).getTime(), // Mar 21
		name: "drained",
		emoji: "😩",
		color: "#9E9E9E",
		timestamp: createDate(2025, 3, 21).toISOString(),
	},
	{
		id: createDate(2025, 3, 20).getTime(), // Mar 20
		name: "inspired",
		emoji: "💡",
		color: "#009688",
		timestamp: createDate(2025, 3, 20).toISOString(),
	},

	// Page 3
	{
		id: createDate(2025, 3, 19).getTime(), // Mar 19
		name: "nervous",
		emoji: "😬",
		color: "#FFA726",
		timestamp: createDate(2025, 3, 19).toISOString(),
	},
	{
		id: createDate(2025, 3, 18).getTime(), // Mar 18
		name: "proud",
		emoji: "🥳",
		color: "#E91E63",
		timestamp: createDate(2025, 3, 18).toISOString(),
	},
	{
		id: createDate(2025, 3, 17).getTime(), // Mar 17
		name: "empty",
		emoji: "⚫",
		color: "#616161",
		timestamp: createDate(2025, 3, 17).toISOString(),
	},
	{
		id: createDate(2025, 3, 16).getTime(), // Mar 16
		name: "refreshed",
		emoji: "💧",
		color: "#AFEEEE",
		timestamp: createDate(2025, 3, 16).toISOString(),
	},
	{
		id: createDate(2025, 3, 15).getTime(), // Mar 15
		name: "overwhelmed",
		emoji: "🤯",
		color: "#7B1FA2",
		timestamp: createDate(2025, 3, 15).toISOString(),
	},
	{
		id: createDate(2025, 3, 14).getTime(), // Mar 14
		name: "jumpy",
		emoji: "🤸",
		color: "#FFB74D",
		timestamp: createDate(2025, 3, 14).toISOString(),
	},
	{
		id: createDate(2025, 3, 13).getTime(), // Mar 13
		name: "numb",
		emoji: "🧊",
		color: "#E0E0E0",
		timestamp: createDate(2025, 3, 13).toISOString(),
	},
	{
		id: createDate(2025, 3, 12).getTime(), // Mar 12
		name: "angry",
		emoji: "😠",
		color: "#F44336",
		timestamp: createDate(2025, 3, 12).toISOString(),
	},
	// Total: 28 entries
];
