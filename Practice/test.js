db.students.updateOne(
    {
        _id: ObjectId('67e3dbaf47b2189eae4d794a')
    },
    {
        $set: {
            name: "Vishv",
            course: "Btech",
            address: {
                city: "Dakor"
            }
        }
    }
)