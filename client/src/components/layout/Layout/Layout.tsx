import { FC } from "react";

import Footer from "../footer/Footer";
import Header from "../header/Header";
import { LayoutProps } from "./interface";

import styles from "./styles.module.scss";

export const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<div>
			<Header />
				<main className={styles.main}>
					{children}
				</main>
			<Footer />
		</div>
	);
};
