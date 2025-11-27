import React from 'react';

export interface Trainer {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface ClassSession {
  id: number;
  time: string;
  name: string;
  trainer: string;
  duration: string;
}

export interface Amenity {
  icon: React.ReactNode;
  title: string;
  description: string;
}