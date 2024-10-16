import { useEffect, useState } from 'react';
import { onSnapshot, collection, orderBy, query, where } from 'firebase/firestore';
import { db } from '../firebase'

import { useEX20142015Store } from '@/stores/useEX20142015Store';

export default function useGetEX20142015List() {
    const setFigures = useEX20142015Store((state) => state.setFigures);
    const [loadingEX20142015, setLoadingEX20142015] = useState<boolean>(true);

    useEffect(() => {
        const figureColRef = collection(db, 'EX20142015');
        const figureQuery = query(figureColRef, orderBy('figure_number'));

        const unsubscribe = onSnapshot(figureQuery, (snapshotData) => {
            const figures: any[] = [];
            snapshotData.forEach((doc) => {
                figures.push({
                    ...doc.data(), id: doc.id
                });
            });
            setFigures(figures);
            setLoadingEX20142015(false);
        });
        return unsubscribe;
    }, [setFigures]);
    
    return { loadingEX20142015 };
}