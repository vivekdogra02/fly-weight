import { Button, Paper, TextField } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import Header from '../../components/Header';
import { getRocketsLaunched } from './rocketAPI';
import { RocketCard } from './RocketCard';
import { fetch, fetchFailure, fetchSuccess } from './rocketLaunchSlice';
import CircularProgress from '@material-ui/core/CircularProgress';

export function Rocket() {
  const [rocketData, setRocketData] = useState<any>();
  const dispatch = useDispatch();
  const { data, error, loading } = useSelector(
    (state: RootState) => state.rocketDisplay
  )
  useEffect(() => {
    async function fetchRockets() {
      try {
        if(!data.length) {
          const fetchRocketsData = await getRocketsLaunched();
          setRocketData(fetchRocketsData);
          dispatch(fetchSuccess({data: fetchRocketsData}))
        }
      } catch (err) {
        dispatch(fetchFailure({error: err}))
      }
    }
    dispatch(fetch());
    fetchRockets()
  }, [])

  if (error) {
    return (
      <div>
        <h1>There was a problem loading issue</h1>
        <p>{error.toString()}</p>
      </div>
    )
  }
if(loading) {
  return (
    <CircularProgress disableShrink />
  )
}

  return (
    rocketData ? rocketData.map((rocketLaunched:any) => (
    <div key={rocketLaunched.flight_number + rocketLaunched.launch_date_unix}>
     <RocketCard loading={loading} rocketLaunched={rocketLaunched} />
    </div>
  )) : null
  );
}

export default React.memo(Rocket);