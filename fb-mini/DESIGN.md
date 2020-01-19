// how the tables are related: users can make posts. users have friends.

usersTable and postsTable // one to many
    one user can have many posts but a post can only have one user
usersTable and friendsTable // many to many
    one user can have many friends and friends can have many other friends (that are users)
postsTable and friendsTable // many to many
    one post can be liked by many friends and many friends can 



usersTable
    firstName: string
    lastName: string
    DOB: date
    password: string
    bio: string
    likes: number
    userID: number
        // this is a primary key
    <!-- friendID: number
        // this is a foreign key. it links it with friendsTable and matches up with requestedID -->

postsTable
    post: string
    datePosted: date
    numberofLikes: number
    postID: number
        // this is a primary key
    userID: number
        // this is a foreign key. it links it with usersTable and matches up with postID

// tracks data pertaining to an individual "friendship"
friendsTable
    requestorID: number
        // this is a foreign key. it links it with the usersTable and matches up with the userID
    requestedID: number (ALSO: friendID maybe)
        // this is a primary key
    dateRequested: date
    status: boolean
        accepted -> true
        declined -> false
        requested -> ? (none?)