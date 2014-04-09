module ns {
    export class NoteCollection {
        private notes: Array<Node>;
        constructor() {
            this.notes = new Array<Node>();
        }
        addNote(note: Node) {
            this.notes.push(note);
        }
        printNotes(): string {
            var noteString = "";

            this.notes.forEach(function (note) {
                noteString += "<div>" + note + "</div>";
            });
            
            return noteString;
        }
    }
} 