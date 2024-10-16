import { useEffect, useState } from 'react';
import { onSnapshot, collection, orderBy, query, where } from 'firebase/firestore';
import { db } from '../firebase'

import { useBA20132014Store } from '@/stores/useBA20132014Store';

export default function useGetBA20132014List() {
    const setFigures = useBA20132014Store((state) => state.setFigures);
    const [loadingBA20132014, setLoadingBA20132014] = useState<boolean>(true); // Initialize loading state to true

    useEffect(() => {
        const figureColRef = collection(db, 'BA20132014');
        const figureQuery = query(figureColRef, orderBy('figure_number'));

        const unsubscribe = onSnapshot(figureQuery, (snapshotData) => {
            const figures: any[] = [];
            snapshotData.forEach((doc) => {
                figures.push({
                    ...doc.data(), 
                    id: doc.id
                });
            });
            setFigures(figures);
            setLoadingBA20132014(false); // Set loading to false once data is fetched
        });

        return unsubscribe; // Cleanup on unmount
    }, [setFigures]);

    return { loadingBA20132014 };
}