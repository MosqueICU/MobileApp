export function QuranSurahReadScreen() {
  const route = useRoute();

  const {surah} = route.params;

  return (
    <Box safeArea flex={1} pt={5} px={10} bg="#020002">
      <CustomHeader text={JSON.stringify(surah)} />
    </Box>
  );
}
