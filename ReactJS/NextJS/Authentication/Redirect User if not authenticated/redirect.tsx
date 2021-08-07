import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async () => {
	// check if the user is logged in
	const ifAuthenticated = false

	if (ifAuthenticated) {
		return { redirect: { destination: '/login', permanent: false } }
	}

	return { props: {} }
}

