
import Image from 'next/image';
import BackgroundVideo from '../BackgroundVideo';
import { serviceData } from '@/app/_data/serviceData';
import Link from 'next/link';
import FilterForm from './FilterForm';
import SearchForm from './SearchForm';
import PostCardSkeleton from '../skeleton/PostCardSkeleton';
import Category from '../category/Category';
import CategoryList from '../category/CategoryList';


const SearchPlace = () => {
    
    
    return (
        <section>
            <div className="w-full h-[550px] relative flex justify-center items-center overflow-hidden">
                {/* background: có thể sử dụng imgage hoặc video cho nền bg */}
                <Image
                    src='https://images.unsplash.com/photo-1544816135-b44f18b3c5d6?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    alt='banner'
                    className='filter brightness-75 object-cover w-full h-full'
                    width={300}
                    height={150}
                />
                {/* <BackgroundVideo /> */}
                <div className='container flex flex-col justify-center items-center gap-3 absolute w-full top-[40%]'>
                    <h2 className='text-white text-center text-4xl font-semibold m-2'>
                        Tìm salon làm đẹp gần nơi bạn ở
                    </h2>
                    <CategoryList />
                    
                </div>
            </div>
        </section>
    )
}

export default SearchPlace