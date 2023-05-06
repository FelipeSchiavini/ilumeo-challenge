export interface TimeClock {
	end?: string;
	id: string;
	start: string;
	user_id: string;
};

export interface User {
  id: string;
  name?: string;
}