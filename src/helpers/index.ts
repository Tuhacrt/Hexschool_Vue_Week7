import { format } from 'date-fns';

export const formatTimeToDate = (time: number): string => format(new Date((time) * 1e3), 'yyyy/MM/dd');

export const formatDateToTime = (date: string): number => Math.floor(Number(new Date(date)) / 1e3);
