'use client';

import { BookOpen, Wrench, Dot } from 'lucide-react';

const currentStatus = {
    working_on: [
        {
            name: 'Personal Website',
            description: 'Building this very site you\'re looking at.',
            todos: [
                'add ascii art animation',
                'add wator-style cellular automaton',
                'add quotes that I like page',
                'add silly terminal',
                'add funny bad UI things',
                'add contact info',
            ],
            status: 'in progress'
        },
    ],
    learning: [
        'Ascii animation',
        'Crafting interpreters',
        'Split mech keyboard',
        'Leetcode practice to finally know my algorithms',
    ]
};

export function StatusUpdate() {
    return (
        <div className="status-update">
            <div className="grid md:grid-cols-2 gap-3">
                <div>
                    <h2 className="text-base text-accent mb-3 flex items-center gap-2">
                        <Wrench size={16} />
                        Currently Working On
                    </h2>
                    <div className="space-y-3">
                        {currentStatus.working_on.map((project, index) => (
                            <div key={index} className="post-card">
                                <h3 className="font-medium text-base">{project.name}</h3>
                                <p className="text-xs text-muted mt-1">{project.description}</p>

                                {project.todos.map((todo, ind) => (
                                    <p key={ind} className="text-xs text-muted mt-1 flex items-center gap-1">
                                        <Dot size={16} />
                                        {todo}
                                    </p>
                                ))}
                                <span className="inline-block px-1.5 py-0.5 text-xs rounded-full bg-accent/10 text-accent mt-2">
                                    {project.status}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h2 className="text-base text-accent mb-3 flex items-center gap-2">
                        <BookOpen size={16} />
                        Currently Learning
                    </h2>
                    <div className="space-y-3">
                        {currentStatus.learning.map((item, index) => (
                            <div key={index} className="post-card">
                                <p className="text-sm">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
