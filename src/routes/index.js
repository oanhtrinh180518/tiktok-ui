import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import { HeaderOnly } from '~/components/Layout';

const publicRoutes = [
    { path: '/', compoment: Home },
    { path: '/following', compoment: Following },
    { path: '/upload', compoment: Upload, layout: HeaderOnly },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
