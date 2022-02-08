import { dbService } from 'fbase';
import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react';

const Home = () => {
  const [nweet, seNweet] = useState('');
  const onSubmit = async event => {
    event.preventDefault();
    // console.log('onsubmit');

    const docRef = await addDoc(collection(dbService, 'nweets'), {
      nweet,
      createdAt: Date.now(),
    });

    seNweet('');
  };
  const onChange = event => {
    const {
      target: { value },
    } = event;
    seNweet(value);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={nweet}
          onChange={onChange}
          type="text"
          placeholder="What's on your mind?"
          maxLength={120}
        />
        <input type="submit" value="Nweet" />
      </form>
    </div>
  );
};
export default Home;
