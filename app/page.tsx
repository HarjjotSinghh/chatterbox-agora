'use client'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { IoIosAddCircle } from 'react-icons/io'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'

export default function Home() {
	const router = useRouter()

	// return (
	// 	<div className="flex flex-col items-center">
	// 		<h1 className="mb-4 mt-20 text-4xl font-extrabold leading-none tracking-tight text-gray-900">
	// 			<span className="text-black">NextJS</span> x <span className="text-blue-500">Agora</span>
	// 		</h1>
	// 		<form
	// 			onSubmit={e => {
	// 				e.preventDefault()
	// 				const target = e.target as typeof e.target & {
	// 					channel: { value: string }
	// 				}
	// 				router.push(`/channel/${target.channel.value}`)
	// 			}}
	// 		>
	// 			<div className="md:flex md:items-center mt-6">
	// 				<div>
	// 					<label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
	// 						Channel Name
	// 					</label>
	// 				</div>
	// 				<div>
	// 					<input
	// 						className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
	// 						id="inline-full-name"
	// 						type="text"
	// 						name="channel"
	// 						placeholder="Enter channel name"
	// 						required
	// 					/>
	// 				</div>
	// 			</div>
	// 			<div className="text-center">
	// 				<button className="inline-flex items-center justify-center px-5 py-3 mt-5 text-base font-medium text-center text-white bg-blue-400 rounded-lg hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
	// 					Submit
	// 				</button>
	// 			</div>
	// 		</form>
	// 	</div>
	// )
	return (
		<div className="min-h-screen gap-8 flex flex-col justify-center items-center px-4">
			{/* <h1 className="text-5xl font-extrabold tracking-tighter">Chatterbox</h1> */}
			<Image
				src={'/logos/svgexport-27.svg'}
				width={1000}
				height={1000}
				className="sm:w-96 select-none w-full h-auto"
				alt="Chatterbox Logo"
				draggable={false}
			></Image>
			<form
				onSubmit={e => {
					e.preventDefault()
					const target = e.target as typeof e.target & {
						channel: { value: string }
					}
					router.push(`/channel/${target.channel.value}`)
				}}
				className="flex flex-col gap-8"
			>
				<div className="flex items-start flex-col gap-2">
					<Input id="inline-full-name" type="text" name="channel" placeholder="Enter Room ID" required />
				</div>
				<div className="flex flex-row sm:w-96 w-full justify-center items-center flex-wrap gap-4">
					<Button className=" bg-primary/5 px-4 py-2 rounded-lg border-2 border-primary/50 hover:bg-primary/10 transition-all duration-300 ease-in-out hover:border-primary/80 inline-flex flex-row flex-wrap items-center gap-1 text-foreground">
						<IoIosAddCircle className="lg:size-6 size-5" />
						<span className="sm:text-base text-sm font-semibold">Join Room</span>
					</Button>
					<Button
						className=" bg-primary/5 px-4 py-2 rounded-lg border-2 border-primary/50 hover:bg-primary/10 transition-all text-foreground duration-300 ease-in-out hover:border-primary/80 inline-flex flex-row flex-wrap items-center gap-1"
						type="submit"
					>
						<IoIosAddCircle className="lg:size-6 size-5" />
						<span className="sm:text-base text-sm font-semibold">Create Room</span>
					</Button>
				</div>
			</form>
			{/* <Input
				className="sm:w-96 w-full"
				placeholder="Enter Room ID"
				value={roomId}
				onChange={e => setRoomId(e?.target?.value)}
			/>
			<div className="flex flex-row sm:w-96 w-full justify-center items-center flex-wrap gap-4">
				<button
					className="bg-primary/5 px-4 py-2 rounded-lg border-2 border-primary/50 hover:bg-primary/10 transition-all duration-300 ease-in-out hover:border-primary/80 inline-flex flex-row flex-wrap items-center gap-1"
					onClick={joinRoom}
				>
					<IoIosAddCircle className="lg:size-6 size-5" />
					<span className="sm:text-base text-sm font-semibold">Join Room</span>
				</button>
				<button
					className="bg-primary/5 px-4 py-2 rounded-lg border-2 border-primary/50 hover:bg-primary/10 transition-all duration-300 ease-in-out hover:border-primary/80 inline-flex flex-row flex-wrap items-center gap-1"
					onClick={joinRoom}
				>
					<IoIosAddCircle className="lg:size-6 size-5" />
					<span className="sm:text-base text-sm font-semibold">Create Room</span>
				</button>
			</div> */}
		</div>
	)
}

