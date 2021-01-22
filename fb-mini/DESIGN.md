Under Design.md, explain and outline how your relational database will work. List the tables, their associated columns, and the data type that will be stored in each column (string, number, boolean, enum, date, etc.). Feel free to add onto what is given above. It might be helpful to get some paper to draw tables and arrows representing connections between data.

Sample Layout:

user {
    firstName: string;
    lastName: string;
    userId: number; -> long
    DOB: string; -> "09-08-2001"
    Password: string;
    Short Bio: string;
}

posts {
    Post: string;
    postedId: number; -> long
    datePosted: string; -> "01-11-2021"
    Likes: number; -> long
}

friends {
    requestorId: number; -> long
    requestedId: number; -> long
    dateRequested: string; -> "01-11-2021"
    Status: string; -> Accepted/Declined/Requested
}