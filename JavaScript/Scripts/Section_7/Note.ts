module ns {
    export class Node {
        noteDetails: string;
        constructor(noteDetails: string) {
            this.noteDetails = noteDetails;
        }
        updateNoteDetails(noteDetails: string) {
            this.noteDetails = noteDetails;
        }

        private removeTrailingSpace(note: string): string {
            return note.trim();
        }

        toString(): string {
            return this.noteDetails;
        }

        static getGenericNote(): string {
            return "This is a default note";
        }
    }
} 