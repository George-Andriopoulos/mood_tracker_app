// Type for the basic mood definition
export type Mood = {
	name: string;
	emoji: string;
	color: string; // Hex color code e.g., '#4CAF50'
};

// Type for an entry in the mood history log
export type MoodEntry = Mood & {
	id: number; // Unique identifier (using timestamp here)
	timestamp: string; // ISO 8601 date string
};
