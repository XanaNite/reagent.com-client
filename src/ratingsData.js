const DATA = {
    agent: [
        {
            id: 1,
            agentName: 'Bilbo Beggins',
            agentTitle: 'Agent',
            agentEmail: 'bilbosells@gmail.com',
            agentPhone:[
                {
                    id: 1,
                    number: '800-666-5555',
                    type: 'cell',
                },
            ],
            agentLocation: 'The Shire, Middle-earth',
            agentOffice: 'Gandolf Real Estate',
            agentBio: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus',
            agentExperience: '50',
            agentSpecialization: [
                'second breakfast',
                'tea',
                'lunch',
                'third breakfast',
            ],
            agentAreasServed: [
                'Misty Mountains',
                'Emyn Beraid',
                'Mount Doom',
                'Weathertop',
            ],
            agentbrokerage: 'Gandolf Real Estate',
            agentSlogan: 'I will help you get rid of your precious!',
            ratings:{
                agentOverall: 5,
                clientRatings: [
                    {
                        id: 1,
                        client: 'Tom',
                        location: 'Phoenix, AZ',
                        year: 2019,
                        overallRating: 5,
                        responseRating: 5,
                        negotiateRating: 5,
                        professionalismRating: 5,
                        expertiseRating: 5,
                        comment: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
                    },
                    {
                        id: 2,
                        client: 'Sally',
                        location: 'Peoria, IL',
                        year: 2017,
                        overallRating: 4,
                        responseRating: 4,
                        negotiateRating: 5,
                        professionalismRating: 5,
                        expertiseRating: 5,
                        comment: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
                    },
                ],
            },
            recommendation: [
                {
                    id: 1,
                    client: 'Sue',
                    comment: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.',
                },
                {
                    id: 2,
                    client: 'Logan',
                    comment: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.',
                },
            ],
            agentListings: [
                {
                    img: {
                        url: '',
                        alt: 'House'
                    },
                    location: 'The Shire',
                    cost: '$140,000',
                    beds: 2,
                    bath: 1,
                },
                {
                    img: {
                        url: '',
                        alt: 'House'
                    },
                    location: 'Weathertop',
                    cost: '$220,000',
                    beds: 4,
                    bath: 2,
                }
            ]
        },
        {
            id: 2,
            agentName: 'Frodo Beggins',
            agentTitle: 'Agent',
            agentEmail: 'bilbosells@gmail.com',
            agentPhone:[
                {
                    id: 1,
                    number: '800-666-5555',
                    type: 'cell',
                },
            ],
            agentLocation: 'The Shire, Middle-earth',
            agentOffice: 'Gandolf Real Estate',
            agentBio: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus',
            agentExperience: '50',
            agentSpecialization: [
                'second breakfast',
                'tea',
                'lunch',
                'third breakfast',
            ],
            agentAreasServed: [
                'Misty Mountains',
                'Emyn Beraid',
                'Mount Doom',
                'Weathertop',
            ],
            agentbrokerage: 'Gandolf Real Estate',
            agentSlogan: 'I will help you get rid of your precious!',
            ratings:{
                agentOverall: 5,
                clientRatings: [
                    {
                        id: 1,
                        client: 'Tom',
                        location: 'Phoenix, AZ',
                        year: 2019,
                        overallRating: 5,
                        responseRating: 5,
                        negotiateRating: 5,
                        professionalismRating: 5,
                        expertiseRating: 5,
                        comment: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
                    },
                    {
                        id: 2,
                        client: 'Sally',
                        location: 'Peoria, IL',
                        year: 2017,
                        overallRating: 4,
                        responseRating: 4,
                        negotiateRating: 5,
                        professionalismRating: 5,
                        expertiseRating: 5,
                        comment: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
                    },
                ],
            },
            recommendation: [
                {
                    id: 1,
                    client: 'Sue',
                    comment: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.',
                },
                {
                    id: 2,
                    client: 'Logan',
                    comment: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.',
                },
            ],
            agentListings: [
                {
                    img: {
                        url: '',
                        alt: 'House'
                    },
                    location: 'The Shire',
                    cost: '$140,000',
                    beds: 2,
                    bath: 1,
                },
                {
                    img: {
                        url: '',
                        alt: 'House'
                    },
                    location: 'Weathertop',
                    cost: '$220,000',
                    beds: 4,
                    bath: 2,
                }
            ]
        },
    ]
}

export default DATA