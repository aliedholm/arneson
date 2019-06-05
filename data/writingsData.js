//year must be filled out if forthcomming must put "na"
//if no filename must put "na"
//if no eds must put "na"
//if no pp must put "na"
var writings = [
	{
		"title" : "Self-Defense and Culpability: Fault Forfeits First",
		"publication" : "San Diego Law Review",
		"eds" : "na",
		"year" : "2018",
		"pp" : "22-45",
		"filename" : "self-defense-and-culpability-fault-forfeits-first.pdf"
	},
	{
		"title" : "Luck Egalitarianism--A Primer",
		"publication" : "Responsibility and Distributive Justice: Oxford University Press",
		"eds" : "C. Knight anbd Z. Stemplowska",
		"year" : "2011",
		"pp" : "24-50",
		"filename" : "luck-egalitarianism-a-primer.pdf"
	},
	{
		"title" : "Guest Worker Programs and Reasonable, Feasible Cosmopolitanism",
		"publication" : "Journal of Legal Studies",
		"eds" : "na",
		"year" : "2018",
		"pp" : "na",
		"filename" : "guest-worker-programs.pdf"
	},
	{
		"title" : "Four Conceptions of Equal Opportunity",
		"publication" : "Economic Journal",
		"eds" : "na",
		"year" : "2018",
		"pp" : "na",
		"filename" : "four-conceptions-of-equal-opportunity.pdf"
	},
	{
		"title" : "Resolving the Responsibility Dilemma",
		"publication" : "The Ethics of War: Essays: Oxford University Press",
		"eds" : "S. Bazargan-Forward and S. Rickless",
		"year" : "2017",
		"pp" : "67-93",
		"filename" : "resolving-the-responsibility-dilemma.pdf"
	},
	{
		"title" : "Dworkin and Luck Egalitarianism: A Comparison",
		"publication" : "Oxford Handbook of Distributive Justice: Oxford University Press",
		"eds" : "S. Olsaretti",
		"year" : "2018",
		"pp" : "41-64",
		"filename" : "dworkin-and-luck-egalitarianism.pdf"
	},
	{
		"title" : "Deontology's Travails",
		"publication" : "Moral Puzzles and Legal Perplexities: Cambridge University Press",
		"eds" : "H. Hurd",
		"year" : "2018",
		"pp" : "na",
		"filename" : "deontologys-travails.pdf"
	},
	{
		"title" : "Exploitation, Domination, Comptitive Markets, and Unfair Division",
		"publication" : "Southern Journal of Philosophy",
		"eds" : "na",
		"year" : "2016",
		"pp" : "na",
		"filename" : "exploitation-domination-competitive-markets-and-unfair-division.pdf"
	},
	{
		"title" : "Consequentialism and Its Critics",
		"publication" : "The Cambridge History of Philosophy 1945-2015: Cambridge University Press",
		"eds" : "K. Becker and I. Thomson",
		"year" : "na",
		"pp" : "na",
		"filename" : "consequentialism-and-its-critics.pdf"
	},
	{
		"title" : "Forgiveness and Consequences",
		"publication" : "",
		"eds" : "M. McKenna, D. Nelkin, and B. Warnke.",
		"year" : "2017",
		"pp" : "33-67",
		"filename" : "forgiveness-and-consequences.pdf"
	},
	{
		"title" : "Extreme Cosmopolitanisms Defended",
		"publication" : "Critical Review of International Social and Political Philosophy",
		"eds" : "na",
		"year" : "2016",
		"pp" : "555-573",
		"filename" : "extreme-cosmopolitanisms-defended.pdf"
	},
	{
		"title" : "Does Fairness Require a Multidimensional Approach?",
		"publication" : "Oxford Handbook of Well-Being and Public Policy: Oxford University Press",
		"eds" : "M. Adler and M. Fleurbaey",
		"year" : "2016",
		"pp" : "588-614",
		"filename" : "does-fairness-require-a-multidimensional-approach.pdf"
	},
	{
		"title" : "Elitism",
		"publication" : "Oxford Studies in Political Philosophy",
		"eds" : "D. Sobel, S. Wall, and P. Vallentyne",
		"year" : "2016",
		"pp" : "156-184",
		"filename" : "elitism.pdf"
	},
	{
		"title" : "Nudge and Shove",
		"publication" : "Social Theory and Practice",
		"eds" : "na",
		"year" : "2015",
		"pp" : "668-691",
		"filename" : "nudge-and-shove.pdf"
	},
	{
		"title" : "What Do We Owe to Poor Families?",
		"publication" : "LEAP: Law, Ethics, and Philosophy (on-line journal",
		"eds" : "na",
		"year" : "2014",
		"pp" : "7-31",
		"filename" : "what-do-we-owe-to-poor-families.pdf"
	},
	{
		"title" : "Why Not Capitalism?",
		"publication" : "Distributive Justice and Access to Advantage: Cambridge University Press",
		"eds" : "A. Kaufman",
		"year" : "2015",
		"pp" : "207-234",
		"filename" : "why-not-capitalism.pdf"
	},
	{
		"title" : "Liberalism and Equality",
		"publication" : "Cambridge Companion to Liberalism: Cambridge University Presst",
		"eds" : "na",
		"year" : "2015",
		"pp" : "212-236",
		"filename" : "liberalism-and-equality.pdf"
	},
	{
		"title" : "Freedom and Religion",
		"publication" : "Oxford Handbook of Freedom",
		"eds" : "D. Schmidtz and C. Pavel",
		"year" : "2018",
		"pp" : "369--388",
		"filename" : "freedom-and-religion.pdf"
	},
	{
		"title" : "Locke and the Liberal Tradition",
		"publication" : "A Companion to Locke: Wiley Blackwell",
		"eds" : "M. Stuart",
		"year" : "2015",
		"pp" : "528-545",
		"filename" : "locke-and-liberal-tradition.pdf"
	},
	{
		"title" : "Basic Equality: Neither Rejectable nor Acceptable",
		"publication" : "Do All Persons Have Equal Moral Worth? On Basic Equality and Equal Respect and Concern: Oxford University Press",
		"eds" : "Uwe Steinhoff",
		"year" : "2015",
		"pp" : "30-52",
		"filename" : "basic-equality-neither-rejectable-nor-acceptable.pdf"
	},
	{
		"title" : "Political Liberalism, Religious Liberty, and Religious Establishment",
		"publication" : "The Role of Religion in Human Rights Discourse: israel Democracy Institute",
		"eds" : "H. Dagan, S. Lifshitz, and Y. Stern",
		"year" : "2014",
		"pp" : "117-144",
		"filename" : "political-liberalism-religious-liberty-and-religious-establishment.pdf"
	},
	{
		"title" : "Neutrality and Political Liberalism",
		"publication" : "Political Neutrality: A Re-evaluation: Palgrave Macmillan",
		"eds" : "D. Weinstock and R. Merrill",
		"year" : "2014",
		"pp" : "25-43",
		"filename" : "neutrality-and-political-liberalism.pdf"
	},
	{
		"title" : "Discrimination, Disparate Impact, and Theories of Justice",
		"publication" : "Philosophical Foundations of Discrimination Law: Oxford University Press",
		"eds" : "S. Moreau and D. Hellman",
		"year" : "2013",
		"pp" : "87-111",
		"filename" : "discrimination-disparate-impact-and-theories-of-justice.pdf"
	},
	{
		"title" : "The Enforcement of Morals Revisited",
		"publication" : "Crimninal Law and Philosophy",
		"eds" : "na",
		"year" : "2013",
		"pp" : "435-454",
		"filename" : "enforcement-of-morals-revisited.pdf"
	},
	{
		"title" : "Equality of Opportunity: Derivative Not Fundamental",
		"publication" : "Journal of Social Philosophy",
		"eds" : "na",
		"year" : "2013",
		"pp" : "1-15",
		"filename" : "equality-of-opportunity-derivative-not-fundamental.pdf"
	},
	{
		"title" : "Rethinking Luck Egalitarianism and Unacceptable Inequalities",
		"publication" : "Philosophical Topics",
		"eds" : "na",
		"year" : "2012",
		"pp" : "153-169",
		"filename" : "rethinking-luck-egalitarianism-and-unacceptable-inequalities.pdf"
	},
	{
		"title" : "Desert and Equality",
		"publication" : "Egalitarianism: New Essays on the Nature and Value of Equality: Oxford University Press",
		"eds" : "N. Holtug and K. Lippert-Rasmussen",
		"year" : "2007",
		"pp" : "262-293",
		"filename" : "desert-and-equality.pdf"
	},
	{
		"title" : "The Supposed Right to a Democratic Say",
		"publication" : "Contemporary Debates in Political Philosophy: Wiley-Blackwell",
		"eds" : "T. Christiano and J. Christman",
		"year" : "2009",
		"pp" : "197-212",
		"filename" : "supposed-right-to-a-democratic-say.pdf"
	},
	{
		"title" : "What Is Wrongful Discrimination?",
		"publication" : "San Diego Law Review",
		"eds" : "na",
		"year" : "2006",
		"pp" : "775-807",
		"filename" : "what-is-wrongful-discrimination.pdf"
	},
	{
		"title" : "Luck Egalitarianism Interpreted and Defended",
		"publication" : "Philosophical Topics",
		"eds" : "na",
		"year" : "2004",
		"pp" : "1-20",
		"filename" : "luck-egalitarianism-interpreted-and-defended.pdf"
	},
	{
		"title" : "Just Warfare Theory and Noncombatant Immunity",
		"publication" : "Cornell International Law Journal",
		"eds" : "na",
		"year" : "2006",
		"pp" : "663-688",
		"filename" : "just-warfare-theory-and-noncombatant-immunity.pdf"
	},
	{
		"title" : "Joel Feinberg and the Justification of Hard Paternalism",
		"publication" : "Legal Theory",
		"eds" : "na",
		"year" : "2005",
		"pp" : "259-284",
		"filename" : "joel-feinberg-and-the-justification-of-hard-paternalism.pdf"
	},
	{
		"title" : "The Meaning of Marriage and State Efforts to Facilitate Friendship, Love, and Child-rearing",
		"publication" : "San Diego Law Review",
		"eds" : "na",
		"year" : "2005",
		"pp" : "979-1001",
		"filename" : "meaning-of-marriage.pdf"
	},
	{
		"title" : "Distributive Justice and Basic Capability Equality: 'Good Enough' Is Not Good Enough",
		"publication" : "Capabilities Equality: Basic Issues and Problems: Routledge",
		"eds" : "A. Kaufman",
		"year" : "2005",
		"pp" : "na",
		"filename" : "distributive-justice-and-basic-capability-equality.pdf"
	},
	{
		"title" : "The Shape of Lockean Rights: Pareto, Fairness, and Consent",
		"publication" : "Social Philosophy and Policy",
		"eds" : "na",
		"year" : "2005",
		"pp" : "255-285",
		"filename" : "the-shape-of-lockean-rights-pareto-fairness-and-consent.pdf"
	},
	{
		"title" : "Cracked Foundations of Liberal Equality",
		"publication" : "Ronald Dworkin and His Critics: Basil Blackwell",
		"eds" : "J. Burley",
		"year" : "2004",
		"pp" : "79-98",
		"filename" : "cracked-foundations-of-liberal-equality.pdf"
	},
	{
		"title" : "Moral Limits on the Demands of Beneficence?",
		"publication" : "The Ethics of ASssistance: Morality and the Distant Needy",
		"eds" : "Deen Chatterjee",
		"year" : "2004",
		"pp" : "33-58",
		"filename" : "moral-limits-on-demands-of-beneficence.pdf"
	},
	{
		"title" : "Consequentialism versus Special-Ties Partiality",
		"publication" : "The Monist",
		"eds" : "na",
		"year" : "2003",
		"pp" : "382-401",
		"filename" : "consequentialism-versus-special-ties-partiality.pdf"
	},
	{
		"title" : "Exploitation and Outcome",
		"publication" : "Politics, Philosophy, anmd Economics",
		"eds" : "na",
		"year" : "2013",
		"pp" : "392-412",
		"filename" : "exploitation-and-outcome.pdf"
	},
	{
		"title" : "Egalitarianism and the Undeserving Poor",
		"publication" : "The Journal of Political Philosophy",
		"eds" : "na",
		"year" : "1997",
		"pp" : "1-24",
		"filename" : "egalitarianism-and-undeserving-poor.pdf"
	},
	{
		"title" : "Liberal Neutrality on the Good: An Autopsy",
		"publication" : "Perfectionism and Neutrality: Essays in Liberal Theory",
		"eds" : "G. Klosko and S. Wall",
		"year" : "2003",
		"pp" : "191-218",
		"filename" : "liberal-neutrality-on-the-good-autopsy.pdf"
	},
	{
		"title" : "The Smart Theory of Responsibility and Desert",
		"publication" : "Desert and Justice: Oxford University Press",
		"eds" : "S. Olsaretti",
		"year" : "2003",
		"pp" : "233-258",
		"filename" : "the-smart-theory-of-responsibility-and-desert.pdf"
	},
	{
		"title" : "Luck and Equality",
		"publication" : "Proceedings of the Aristotelian Society supp. vol. 75",
		"eds" : "na",
		"year" : "2001",
		"pp" : "73-90",
		"filename" : "luck-and-equality.pdf"
	},
	{
		"title" : "Against Rights",
		"publication" : "Philosophical Issues, supp. to NOUS",
		"eds" : "na",
		"year" : "2001",
		"pp" : "172-201",
		"filename" : "against-rights.pdf"
	},
	{
		"title" : "Welfare Should Be the Currency of Welfare",
		"publication" : "Canadian Journal of Philosophy",
		"eds" : "na",
		"year" : "2000",
		"pp" : "497-524",
		"filename" : "welfare-should-be-the-currency-of-justice.pdf"
	},
	{
		"title" : "Perfectionism and Politics",
		"publication" : "Ethics",
		"eds" : "na",
		"year" : "2000",
		"pp" : "37-63",
		"filename" : "perfectionism-and-politics.pdf"
	},
	{
		"title" : "Egalitarianism and Responsibility",
		"publication" : "Journal of Ethics",
		"eds" : "na",
		"year" : "1999",
		"pp" : "225-247",
		"filename" : "egalitarianism-and-responsibility.pdf"
	},
	{
		"title" : "Luck Egalitarianism and Prioritarianism",
		"publication" : "Ethics",
		"eds" : "na",
		"year" : "2000",
		"pp" : "339-349",
		"filename" : "luck-egalitarianism-and-prioritarianism.pdf"
	},
	{
		"title" : "Paternalism and the Principle of Fairness",
		"publication" : "Paternalism: Theory and Practice: Cambridge University Press",
		"eds" : "C. Coons and M. Weber",
		"year" : "2013",
		"pp" : "134-156",
		"filename" : "paternalism-and-principle-of-fairness.pdf"
	},
	{
		"title" : "Justice Is Not Equality [critical notice on G. A. Cohen]",
		"publication" : "Re-evaluation",
		"eds" : "na",
		"year" : "2008",
		"pp" : "371-391",
		"filename" : "justice-is-not-equality.pdf"
	},
	{
		"title" : "Does Social Justice Matter? Brian Barry's Applied Political Philosophy",
		"publication" : "Ethics",
		"eds" : "na",
		"year" : "2007",
		"pp" : "391-412",
		"filename" : "does-social-justice-matter-brian-barrys-applied-political-philosophy.pdf"
	},
	{
		"title" : "Good, Period [review of Judith Thonmson, Normativity]",
		"publication" : "Analysis supp. vol.",
		"eds" : "na",
		"year" : "2010",
		"pp" : "na",
		"filename" : "good-period.pdf"
	},
	{
		"title" : "Commodification and Commercial Surrogacy",
		"publication" : "Philosophy and Public Affairs",
		"eds" : "na",
		"year" : "1992",
		"pp" : "132-164",
		"filename" : "commodification-and-commercial-surrogacy.pdf"
	},
	{
		"title" : "Feminism and Family Justice",
		"publication" : "Public Affairs Quarterly",
		"eds" : "na",
		"year" : "1997",
		"pp" : "345-363",
		"filename" : "feminism-and-family-justice.pdf"
	},
	{
		"title" : "Paternalism, Utility, and Fairness",
		"publication" : "Revue Internationale de Philosophie",
		"eds" : "na",
		"year" : "1989",
		"pp" : "409-437",
		"filename" : "paternalism-utility-and-fairness.pdf"
	},
	{
		"title" : "Shakespeare and the Jewish Question",
		"publication" : "Political Theory",
		"eds" : "na",
		"year" : "1985",
		"pp" : "85-111",
		"filename" : "shakespeare-and-the-jewish-question.pdf"
	},
	{
		"title" : "The Principle of Fairness and Free-Rider Problems",
		"publication" : "Ethics",
		"eds" : "na",
		"year" : "1982",
		"pp" : "616-633",
		"filename" : "principle-of-fairness-and-free-rider-problems.pdf"
	},
	{
		"title" : "Sophisticated Rule Consequentialism: Some Simple Objections",
		"publication" : "Philosophical Issues NOUS supp. vol.",
		"eds" : "na",
		"year" : "2005",
		"pp" : "na",
		"filename" : "sophisticated-rule-consequentialism-some-simple-objections.pdf"
	},
	{
		"title" : "Equality and Equal Opportunity for Welfare",
		"publication" : "Philosophical Studies",
		"eds" : "na",
		"year" : "1989",
		"pp" : "77-93",
		"filename" : "equality-and-equal-opportunity-for-welfare.pdf"
	},
	{
		"title" : "Equal Opportunity for Welfare Defended and Recanted",
		"publication" : "Journal of Political Philosophy",
		"eds" : "na",
		"year" : "1999",
		"pp" : "488-497",
		"filename" : "equal-opportunity-for-welfare-defended-and-recanted.pdf"
	},
	{
		"title" : "Against Rawlsian Equality of Opportunity",
		"publication" : "Philosophical Studies",
		"eds" : "na",
		"year" : "1999",
		"pp" : "77-112",
		"filename" : "against-rawlsian-equality-of-opportunity.pdf"
	},
	{
		"title" : "What Sort of Equality (If Any) Should Feminists Seek? ",
		"publication" : "Journal of Contemporary Legal Issues",
		"eds" : "na",
		"year" : "1998",
		"pp" : "21-36",
		"filename" : "what-sort-of-sexual-eqality-if-any-should-feminists-seek.pdf"
	},
	{
		"title" : "Democratic Equality and relating as Equals",
		"publication" : "Justice and Equality: Canadian Journal of Philosophy supp. vol.",
		"eds" : "C. Macleod",
		"year" : "2010",
		"pp" : "25-52",
		"filename" : "democratic-equality-and-relating-as-equals.pdf"
	},
	{
		"title" : "Two Cheers for Capabilities",
		"publication" : "Measuring Justice: Primary Goods and Capabilities",
		"eds" : "H. Brighouse and I. Robeyns",
		"year" : "2010",
		"pp" : "na",
		"filename" : "two-cheers-for-capabilities.pdf"
	},
	{
		"title" : "What Do We Owe to Distant Needy Strangers?",
		"publication" : "Peter Singer under Fire: The Moral Iconoclast Faces His Criticss",
		"eds" : "J. Schaler",
		"year" : "2009",
		"pp" : "267-293",
		"filename" : "what-do-we-owe-to-distant-needy-strangers.pdf"
	},
	{
		"title" : "Side Constraints, Lockean Individual Rights, and the Moral Basis of Libertarianism",
		"publication" : "Cambridge Companion to Nozick's 'Anarchy, State, and Utopia': Cambridge University Press",
		"eds" : "R. Bader and J. Meadowcroft",
		"year" : "2011",
		"pp" : "15-27",
		"filename" : "side-constraints-lockean-individual-rights-and-the-moral-basis-of-libertarianism.pdf"
	},
	{
		"title" : "Rawls, Responsibility, and Distributive Justice",
		"publication" : "Justice, Political Liberalism, and Utilitarianism: Themes from Harsanyi and Rawls: Cambridge University Press",
		"eds" : "M. Fleurbaey, M. Salles, and J. Weymark",
		"year" : "2008",
		"pp" : "na",
		"filename" : "rawls-responsibility-and-distributive-justice.pdf"
	},
	{
		"title" : "Egalitarian Perspectives on Paternalism",
		"publication" : "Routledge Handbook of the Philosophy of Paternalism",
		"eds" : "K. Grille and J. Hanna",
		"year" : "2018",
		"pp" : "194-205",
		"filename" : "egalitarian-perspectives-on-paternalism.pdf"
	},
	{
		"title" : "The Capabilities Approach and Political Liberalism",
		"publication" : "Handbook of the Capabilities Approach: Cambridge University Press",
		"eds" : "M. Qizilbash et al.",
		"year" : "na",
		"pp" : "na",
		"filename" : "capabilities-approach-and-political-liberalism.pdf"
	},
	{
		"title" : "Discrimination and Harm",
		"publication" : "Routledge Handbook of the Ethics of Discrimination",
		"eds" : "K. Lippert-Rasmussen",
		"year" : "2018",
		"pp" : "151-163",
		"filename" : "discrimination-and-harm.pdf"
	},
	{
		"title" : "Democracy versus Libertarianism",
		"publication" : "Routledge Handbook of Libertarianism",
		"eds" : "J. Brennan, B. van der Vossen, and D. Schmidtz",
		"year" : "2018",
		"pp" : "53-67",
		"filename" : "democracy-versus-libertarianism.pdf"
	},
	{
		"title" : "What, if Anything, Renders All Humans Morally Equasl?",
		"publication" : "Peter Singer and His Critics: Blackwell",
		"eds" : "D. Jamieson",
		"year" : "1999",
		"pp" : "103-128",
		"filename" : "what-if-anything-renders-all-humans-morally-equal.pdf"
	}
]