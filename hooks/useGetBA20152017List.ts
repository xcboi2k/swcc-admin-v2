import { useEffect, useState } from 'react';
import { onSnapshot, collection, orderBy, query, where } from 'firebase/firestore';
import { db } from '../firebase'

import { useBA20152017Store } from '@/stores/useBA20152017Store';

export default function useGetBA20152017List() {
    const setFigures = useBA20152017Store((state) => state.setFigures);
    const [loadingBA20152017, setLoadingBA20152017] = useState<boolean>(true);

    useEffect(() => {
        const figureColRef = collection(db, 'BA20152017');
        const figureQuery = query(figureColRef, orderBy('figure_number'));

        const unsubscribe = onSnapshot(figureQuery, (snapshotData) => {
            const figures: any[] = [];
            snapshotData.forEach((doc) => {
                figures.push({
                    ...doc.data(), id: doc.id
                });
            });
            setFigures(figures);
            setLoadingBA20152017(false);
        });
        return unsubscribe;
    }, [setFigures]);

    return { loadingBA20152017 };
}