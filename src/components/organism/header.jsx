import '../../styles/organism/header.css';
import { BalanceInfo } from "../molecule/BalanceInfo";
import { Divider } from "../atomic/Divider";
import { StashInfo } from "../molecule/Stash";
import { NavMenu } from "../molecule/NavMenu";

export function Header() {
  return (
    <header>
       <section className="header-logo">
        GROVE MARKET
      </section>

      <NavMenu />

      <section className="header-actions">
        <BalanceInfo balance="100.000" />
        <Divider orientation="vertical"/>
        <StashInfo quantity={0} />
      </section>
    </header>
  );
}