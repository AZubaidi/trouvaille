import Hero from "../../components/Hero/Hero";
import Quiz from "../../components/Quiz/Quiz";

export default function Homepage({addFavorite, deleteFavorite, checkFavorites}) {
	return (
		<>
			<Hero />
			<Quiz 
				addFavorite={addFavorite}
				deleteFavorite={deleteFavorite}
				checkFavorites={checkFavorites}
			/>
		</>
	)
};
