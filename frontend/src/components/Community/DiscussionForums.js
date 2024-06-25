import React, { useEffect, useState } from 'react';
import { getForumThreads } from '../../services/communityService';

const DiscussionForums = () => {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    const fetchThreads = async () => {
      try {
        const threadData = await getForumThreads();
        setThreads(threadData);
      } catch (error) {
        console.error('Failed to fetch threads', error);
      }
    };

    fetchThreads();
  }, []);

  return (
    <div>
      <h2>Discussion Forums</h2>
      {threads.length > 0 ? (
        threads.map((thread, index) => (
          <div key={index}>
            <p>Title: {thread.title}</p>
            <p>Started by: {thread.author}</p>
            <p>Date: {thread.date}</p>
          </div>
        ))
      ) : (
        <p>No threads available</p>
      )}
    </div>
  );
};

export default DiscussionForums;
