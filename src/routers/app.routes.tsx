import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ReposPage } from '../pages/repos';
import { UsersPage } from '../pages/users';

export function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Navigate to="users"/>}/>
                <Route path='users' element={<UsersPage/>}/>
                <Route path='users/:login/repos' element={<ReposPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}