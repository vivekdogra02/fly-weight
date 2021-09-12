import { Button, Paper, TextField } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import { getRocketsLaunched } from './rocketAPI';
import { RocketCard } from './RocketCard';

export function Rocket() {
  const [rocketData, setRocketData] = useState<any>();
  const [apiError, setAPIError] = useState<any>(null)
  useEffect(() => {
    async function fetchRockets() {
      try {
        setAPIError(null);
        const data = await getRocketsLaunched();
        setRocketData(data);
      } catch (err) {
        setAPIError(err);
      }
    }

    fetchRockets()
  }, [])

  if (apiError) {
    return (
      <div>
        <h1>There was a problem loading issue</h1>
        <p>{apiError.toString()}</p>
      </div>
    )
  }


  return (
   rocketData ? rocketData.map((rocketLaunched:any) => (
    <div key={rocketLaunched.flight_number + rocketLaunched.launch_date_unix}>
     <RocketCard rocketLaunched={rocketLaunched} />
    </div>
  )) : null
  );
}