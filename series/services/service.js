const series = {
    body: [
        {
            id: 1,
            name: "The Office",
            episodes: [
                {
                    id: 1,
                    name: "Pilot",
                    season: 1,
                    episode: 1,
                    description:
                        "The series follows the everyday lives of office employees in the Scranton, Pennsylvania, branch of the fictional Dunder Mifflin Paper Company.",
                    rating: 8.9,
                },
                {
                    id: 2,
                    name: "Diversity Day",
                    season: 1,
                    episode: 2,
                    description:
                        "Michael Scott tries to make the office more diverse by hiring a black employee.",
                    rating: 8.8,
                },
            ],
        },
        {
            id: 2,
            name: "Friends",
            episodes: [
                {
                    id: 3,
                    name: "The One Where Monica Gets a Roommate",
                    season: 1,
                    episode: 1,
                    description:
                        "Monica gets a roommate named Rachel, who is spoiled, annoying, and a bit of a slob.",
                    rating: 8.8,
                },
                {
                    id: 4,
                    name: "The One With the Sonogram at the End",
                    season: 1,
                    episode: 2,
                    description: "Ross and Rachel",
                    reating: 8.8,
                },
            ],
        },
    ],
    getAll: () => {
        return series.body;
    },
    getById: (id) => {
        return series.body.filter((item) => item.id == id);
    },
    save: (data) => {
        series.body.push(data);
        return series.body.filter((item) => item.name == data.name);
    },
    saveEpisode: (data) => {
        series.body.forEach((item) => {
            if (item.id == data.id) {
                item.episodes.push(data.episode);
            }
        });
        return series.body.filter((item) => item.id == data.id);
    },
    update: (id, data) => {
        series.body.forEach((item) => {
            if (item.id == id) {
                item.name = data.name;
            }
        });
        return series.body.filter((item) => item.id == id);
    },
    delete: (id) => {
        series.body.forEach((item, index) => {
            if (item.id == id) {
                series.body.splice(index, 1);
            }
        });
        return series.body;
    },
};

module.exports = series;
