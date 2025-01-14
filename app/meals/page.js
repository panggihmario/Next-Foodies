import classes from "./page.module.css";
import Link from "next/link";
import MealsGrid from "../components/meals/meals-grid";
import { getMeal } from "@/lib/meals";
import { Suspense } from "react";
import Loading from "./loading-out.js";
async function Meals() {
  const meals = await getMeal();
  return <MealsGrid meals={meals} />;
}

export default async function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you</span>
          <p>
            Choose your favorite recipe and cook it yourself. It is easy and fun
          </p>
          <p className={classes.cta}>
            <Link href="/meals/share">Share your favorite meals</Link>
          </p>
        </h1>
        <main className={classes.main}>
          <Suspense fallback={<Loading />}>
            <Meals />
          </Suspense>
        </main>
      </header>
    </>
  );
}
