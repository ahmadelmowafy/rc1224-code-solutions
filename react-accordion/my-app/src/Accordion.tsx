import { useState } from 'react';
import './Accordion.css';

type AccordionProps = {
  topics: { id: number; title: string; content: string }[];
};

export default function Accordion({ topics }: AccordionProps) {
  const [openTopicId, setOpenTopicId] = useState<undefined | number>();

  function handleTopicClick(id: number) {
    if (id === openTopicId) {
      setOpenTopicId(undefined);
    } else {
      setOpenTopicId(id);
    }
  }

  return (
    <div>
      {topics.map((topic) => (
        <TopicCard
          key={topic.id}
          topic={topic}
          isOpen={openTopicId === topic.id}
          onHandleTopicClick={handleTopicClick}
        />
      ))}
    </div>
  );
}

type TopicCardProps = {
  topic: { id: number; title: string; content: string };
  isOpen: boolean;
  onHandleTopicClick: (id: number) => void;
};

function TopicCard({ topic, isOpen, onHandleTopicClick }: TopicCardProps) {
  return (
    <div className="topic">
      <div className="topic-title" onClick={() => onHandleTopicClick(topic.id)}>
        {topic.title}
      </div>
      {isOpen && <div className="topic-content">{topic.content}</div>}
    </div>
  );
}
