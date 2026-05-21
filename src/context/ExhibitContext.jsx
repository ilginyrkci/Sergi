import { createContext, useContext, useMemo } from 'react';
import { students } from '../data/students';

const ExhibitContext = createContext(null);

export function ExhibitProvider({ children }) {
  const getStudent = useMemo(
    () => (studentId) => students.find((s) => s.id === Number(studentId)),
    []
  );

  const getWork = useMemo(
    () => (studentId, workId) => {
      const s = students.find((s) => s.id === Number(studentId));
      return s?.works.find((w) => w.id === Number(workId));
    },
    []
  );

  return (
    <ExhibitContext.Provider value={{ students, getStudent, getWork }}>
      {children}
    </ExhibitContext.Provider>
  );
}

export function useExhibit() {
  const ctx = useContext(ExhibitContext);
  if (!ctx) throw new Error('useExhibit must be used within ExhibitProvider');
  return ctx;
}
