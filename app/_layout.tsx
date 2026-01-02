import { Stack, useRouter, useSegments } from 'expo-router';
import { useEffect } from 'react';
import { AuthProvider, useAuth } from '../src/context/AuthContext';


 function RootNavigator() {
  const { isLoggedIn } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  const inAuthGroup = segments[0] === '(auth)';

  useEffect(() => {
    if (!isLoggedIn && !inAuthGroup) {
      // redirect to login with redirectTo query
      router.replace({
        pathname: '/(auth)/login',
        query: { redirectTo: router.asPath }
      });
    }

    if (isLoggedIn && inAuthGroup) {
      router.replace('/(app)/catalog');
    }
  }, [isLoggedIn, segments]);

  return <Stack screenOptions={{ headerShown: false }} />;
}


export default function RootLayout() {
  return (
    <AuthProvider>
      <RootNavigator />
    </AuthProvider>
  );
}
