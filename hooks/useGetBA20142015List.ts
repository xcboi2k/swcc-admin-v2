import { useEffect, useState } from 'react';
import { onSnapshot, collection, orderBy, query, where } from 'firebase/firestore';
import { db } from '../firebase'

import { useBA20142015Store } from '@/stores/useBA20142015Store';

export default function useGetBA20142015List() {
    const setFigures = useBA20142015Store((state) => state.setFigures);
    const [loadingBA20142015, setLoadingBA20142015] = useState<boolean>(true);

    useEffect(() => {
        const figureColRef = collection(db, 'BA20142015');
        const figureQuery = query(figureColRef, orderBy('figure_number'));

        const unsubscribe = onSnapshot(figureQuery, (snapshotData) => {
            const figures: any[] = [];
            snapshotData.forEach((doc) => {
                figures.push({
                    ...doc.data(), id: doc.id
                });
            });
            setFigures(figures);
            setLoadingBA20142015(false);
        });
        return unsubscribe;
    }, [setFigures]);

    return { loadingBA20142015 };
}