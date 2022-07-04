module.exports.Note = class Note {
    constructor(id,title, content,createdBy,createdAt,updatedAt) {
        this.id =  id
        this.title = title;
        this.content = content;
        this.createdBy = createdBy;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        
    }
}