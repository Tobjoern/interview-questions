class UserManager {
    private users: { id: number; name: string }[];

    constructor() {
        this.users = [];
    }

    public addUser(id: number, name: string): void {
        if (typeof id === "number" && typeof name === "number") {
            this.users.push({ id, name });
        }
    }

    public getUser(id: number): { id: number; name: string } {
        const user = this.users.find(user => user.id == id);
        return user;
    }

    public deleteUser(id: number): boolean {
        const index = this.users.findIndex(u => u.id === id);
        if (index > -1) {
            this.users.splice(index, 1);
            return true;
        }
        return false;
    }
}
