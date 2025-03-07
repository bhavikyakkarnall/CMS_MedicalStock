export default class ItemsService {
    
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    // Get items
    async getItem() {
        let response = await fetch(this.baseUrl);
        let items = await response.json();
        return items;
    }

    // Update item with the new comment
    async updateItem(itemId, updatedItem) {
        const response = await fetch(`${this.baseUrl}/${itemId}`, {
            method: 'PUT', // Use 'PATCH' if you prefer partial updates
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedItem),
        });

        if (!response.ok) {
            throw new Error('Failed to update the item');
        }

        return response.json();  // Return updated item data from server if needed
    }
}
