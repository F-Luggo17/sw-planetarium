import { Routes, Route, Navigate} from 'react-router-dom';
import { Planets, About, Residents, ResidentDetail } from '../app/pages';

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Navigate to='planets' />} />
            <Route path='planets' element={<Planets />} />
            <Route path='planets/:id' element={<Residents />} />
            <Route path='planets/:id/:id' element={<ResidentDetail />} />
            <Route path="planets/*" element={<Navigate to="planets" replace />} />
            <Route path='planets/:id/*' element={<Navigate to="planets" replace />} />
            <Route path='about' element={<About />} />
        </Routes>
    </>
  )
}
