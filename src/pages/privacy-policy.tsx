import Head from "next/head";
import { useQuery } from "@apollo/client";
import { initializeApollo, addApolloState } from "@/utils/apollo-client";
import {
    GET_HEADER_MENUS,
    GET_FOOTER_MENUS,
    POLICY_PAGE_QUERY,
} from "@/queries";
import { ErrorMessage } from "@/components";

const Policy = () => {
    const { data, loading, error } = useQuery(POLICY_PAGE_QUERY);

    if (error) return <ErrorMessage message={error.message} />;
    if (loading) return <div>Loading...</div>;

    return (
        <>
            <Head>
                <title>{data.page.seoTitle}</title>
                <meta name="description" content={data.page.seoDescription} />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <main>
                <section className="section">
                    <div className="text-center">
                        <h1 className="font-bold text-xl md:text-2xl leading-[108px]">
                            {data.page.pageTitle}
                        </h1>
                        <p className="font-normal text-lg leading-[21.6px] mt-4">
                            {data.page.subtitle}
                        </p>
                    </div>
                    <p className="text-justify pt-6">
                        Curabitur ut lobortis eros. Pellentesque mauris lectus,
                        semper non erat eget, maximus semper sapien. Quisque
                        ultricies, turpis vitae semper pharetra, ligula ex
                        interdum magna, non condimentum elit nisl porta enim. In
                        posuere eros diam, a blandit nulla fringilla sagittis.
                        Vestibulum tincidunt, lectus imperdiet gravida suscipit,
                        ex eros posuere orci, accumsan sollicitudin quam turpis
                        in quam. Nulla facilisi. Pellentesque in felis eu est
                        consectetur auctor. Nunc eget urna rhoncus, congue
                        tortor et, bibendum ante. Cras mollis quam quis enim
                        pulvinar, ac hendrerit quam posuere. Vivamus
                        pellentesque, velit a lacinia pellentesque, ligula diam
                        posuere dolor, eu ultrices elit libero vitae orci. Ut eu
                        odio risus. Mauris fringilla fermentum sapien at
                        sollicitudin. Praesent ut augue egestas, faucibus sem
                        ac, pretium neque. In id nisl aliquam, tempor metus in,
                        congue magna. Integer a bibendum nulla. Praesent
                        consectetur magna sed ante sollicitudin tincidunt.
                        Aliquam mollis arcu id pellentesque posuere. Nam
                        vestibulum, lorem at ullamcorper suscipit, ipsum elit
                        lacinia lacus, nec luctus augue nisl commodo nisl.
                        Phasellus in finibus odio. Morbi venenatis lacus tempus
                        viverra molestie. Vestibulum efficitur libero nec
                        condimentum efficitur. Sed auctor sapien sed sapien
                        mattis viverra. Vivamus blandit ac tellus porta
                        accumsan. Ut dictum consectetur convallis. Vivamus purus
                        eros, molestie quis turpis et, vulputate consectetur
                        eros. Donec in sapien varius, hendrerit ligula sit amet,
                        scelerisque metus. Donec venenatis fermentum
                        pellentesque. Nam eleifend feugiat nisi laoreet
                        malesuada. Aliquam erat volutpat. Morbi eget lobortis
                        tellus. Ut metus quam, volutpat sit amet feugiat in,
                        vehicula ac ligula. Vivamus dapibus fringilla sapien,
                        sit amet sodales lorem semper vel. Nunc maximus odio eu
                        leo molestie, at imperdiet nibh cursus. Donec efficitur,
                        diam at feugiat tincidunt, justo eros molestie nisl,
                        quis condimentum arcu massa id tortor. Cras hendrerit
                        urna vitae gravida interdum. Aliquam pharetra turpis eu
                        sapien cursus, ut vulputate urna porta. Vestibulum eget
                        orci lectus. Vivamus rutrum, tortor id bibendum porta,
                        odio lorem tincidunt felis, id luctus sapien mauris at
                        leo. Vestibulum sed varius odio. Donec at lectus odio.
                        Maecenas lorem diam, ornare in laoreet porta, placerat
                        vitae urna. Ut scelerisque urna vel congue accumsan.
                        Quisque non molestie odio. Integer efficitur faucibus
                        libero. Nullam ultrices posuere nibh et vulputate. Sed
                        id rutrum libero. Mauris ullamcorper consectetur
                        lacinia. Duis accumsan turpis odio, eu commodo diam
                        blandit eu. Praesent mattis arcu in augue condimentum,
                        eget viverra leo commodo. Integer rhoncus magna vitae
                        odio vulputate, a tempus libero elementum. Suspendisse
                        dapibus turpis imperdiet, molestie erat sit amet,
                        ullamcorper sapien. In hac habitasse platea dictumst.
                        Vivamus vestibulum semper condimentum. Integer malesuada
                        condimentum ultricies. Integer rutrum vel sapien in
                        eleifend. Suspendisse suscipit libero est, vitae
                        pellentesque sem posuere ac. Curabitur in aliquam erat.
                        Aliquam eu cursus nisi, at imperdiet sem. Curabitur
                        sodales nulla finibus aliquam cursus. Nam accumsan, erat
                        at vulputate fermentum, nunc nulla tincidunt nisl, non
                        scelerisque massa enim id nunc. Morbi elementum
                        facilisis luctus. Curabitur lobortis eu erat ut
                        interdum. Phasellus rutrum aliquet ornare. Donec vitae
                        nunc eu purus laoreet faucibus vel in lorem. Quisque
                        bibendum, felis vel egestas iaculis, purus dui facilisis
                        neque, a ornare nisl augue et tellus. Nulla pharetra
                        felis ut sem sagittis, eget tincidunt justo fringilla.
                        Quisque interdum urna in imperdiet imperdiet. Mauris in
                        placerat odio. Ut et ante nisi. Duis felis tellus,
                        aliquet vel scelerisque rhoncus, euismod a erat.
                        Vestibulum finibus velit vel libero mollis interdum.
                        Cras vitae tempor ligula. Pellentesque convallis quam
                        ligula, eget egestas dolor blandit eget. Integer ut
                        tortor ac ante ullamcorper mollis ac vel ex. Quisque a
                        felis ut elit ornare cursus. Morbi faucibus nisi ac
                        lacus semper, at facilisis odio tempus. Pellentesque
                        efficitur, tellus ut sagittis egestas, dolor lacus
                        egestas urna, ac sollicitudin orci mi vel massa.
                        Suspendisse laoreet eu neque et aliquet. Mauris nec
                        justo tempus, elementum velit eget, egestas nisi. Sed
                        sit amet maximus dui, et ultricies risus. Sed bibendum
                        dapibus tristique. Nullam nisl turpis, pharetra eget
                        scelerisque vel, vehicula in orci. Vivamus in arcu nisi.
                        Praesent quis leo vitae odio maximus lobortis a sed
                        neque. Nunc arcu magna, euismod et finibus sed, molestie
                        in odio. In vel est quis arcu maximus vehicula. Sed
                        rutrum dapibus sem vitae imperdiet. Vivamus sodales nisl
                        nulla, non cursus magna egestas et. Fusce sollicitudin
                        sapien vitae ex egestas placerat. Mauris vitae posuere
                        leo. Nulla interdum nisl ut facilisis ornare. Interdum
                        et malesuada fames ac ante ipsum primis in faucibus.
                        Donec aliquet id ex vel convallis. Sed pretium felis
                        eget nisi blandit, vitae dictum lorem condimentum. Etiam
                        quis tortor id erat aliquam mattis at sit amet ante. Sed
                        suscipit quis purus eu aliquet. Praesent ante elit,
                        vestibulum in arcu in, venenatis semper nunc. Quisque
                        quis suscipit lectus. Praesent semper nulla sed interdum
                        malesuada. Aenean nec ultricies felis. Nullam dapibus
                        neque lectus, id dignissim libero vestibulum sed. Etiam
                        non pellentesque odio. Aliquam euismod ipsum eget augue
                        tempor, nec sodales diam maximus. Curabitur placerat,
                        elit vel feugiat fermentum, nibh risus porta mauris,
                        ultricies faucibus magna dui nec dui. Vestibulum
                        tincidunt luctus urna, non aliquam mauris sollicitudin
                        et. Mauris eget dui tortor. Suspendisse congue
                        consectetur risus, pulvinar facilisis est accumsan sed.
                        Curabitur et mauris sed leo euismod lobortis placerat id
                        ipsum. Praesent vehicula est accumsan nulla fermentum
                        euismod. Mauris semper, risus eu venenatis mattis, risus
                        massa pharetra erat, ac congue diam nisi rhoncus ipsum.
                        Nam nec cursus enim, vitae pellentesque orci. Nam ut
                        sodales neque. In in mollis turpis. Donec pretium
                        facilisis orci quis ultrices. Fusce congue velit a
                        mollis dapibus. Sed a orci ut velit rhoncus aliquet
                        tincidunt ut justo. Ut ut ligula sed diam viverra
                        euismod. Nunc ligula risus, accumsan nec ante sed,
                        eleifend iaculis mi. Class aptent taciti sociosqu ad
                        litora torquent per conubia nostra, per inceptos
                        himenaeos. Curabitur placerat ante pulvinar, gravida
                        tortor id, suscipit libero. Etiam sed maximus mi, quis
                        faucibus mauris. In fermentum mauris metus, eget iaculis
                        purus tincidunt eget. Nullam id mi ac lectus eleifend
                        auctor ac vehicula augue. Aenean congue pulvinar ligula
                        sed ullamcorper. Donec non efficitur est. Sed enim
                        libero, mattis eget aliquet eget, elementum eu felis.
                        Cras volutpat sem metus, non sollicitudin mauris
                        molestie ut. Integer sit amet lacinia est, vitae
                        consequat est. Cras nec turpis a massa bibendum varius.
                        Vestibulum imperdiet, nisi sit amet iaculis pretium,
                        arcu leo tincidunt felis, non auctor dolor nisi feugiat
                        mauris. In hac habitasse platea dictumst. Vivamus in
                        nibh dui. Praesent lacus tellus, dignissim id lorem
                        finibus, luctus mollis diam. Duis interdum sapien vel
                        tristique porta. Aliquam interdum orci quis efficitur
                        tristique. Phasellus vel pellentesque sem. Duis
                        vestibulum nulla massa, quis volutpat risus sagittis
                        vel. Nulla tempor in enim vel vehicula. Donec sodales
                        neque ex, a hendrerit dui fringilla vel. Proin vitae dui
                        tortor. Etiam dictum orci nec dictum tincidunt.
                        Suspendisse eget odio viverra, vestibulum nisi sed,
                        tempus magna. Integer finibus sapien lobortis lorem
                        semper, vitae fringilla augue facilisis. Donec finibus
                        cursus massa eget ultrices. Aliquam a aliquet tellus, eu
                        ultricies eros. Proin condimentum, est a pretium varius,
                        diam odio vestibulum justo, molestie sodales enim tellus
                        eu turpis. Maecenas vel eros at mauris bibendum
                        fermentum quis vitae nulla. Vestibulum sit amet ipsum
                        suscipit, fringilla ante non, vulputate magna. Ut at
                        lacus feugiat, vestibulum est non, cursus diam. Nam
                        pellentesque, metus sed varius semper, erat enim
                        molestie augue, a viverra justo ligula ac urna. Nam
                        condimentum aliquet sollicitudin. Nullam quis felis eu
                        eros dapibus blandit vitae lobortis elit. Aenean id
                        lorem eget dolor finibus elementum ac sed purus. Duis
                        consequat turpis non felis laoreet euismod. Nullam
                        fringilla semper scelerisque. Nullam fermentum erat nec
                        ligula gravida, sed imperdiet elit venenatis. Nulla
                        cursus molestie orci dignissim convallis. Aliquam
                        ultrices urna ut consectetur posuere. Aenean interdum
                        nisi vel elit gravida varius et id erat. Nulla mattis
                        efficitur tempor. Praesent molestie velit ac risus
                        pellentesque, at pretium dui blandit. Maecenas pulvinar
                        sagittis lacus sit amet sollicitudin. Sed sed nibh diam.
                        In eu dolor sed tellus vulputate sollicitudin. Donec at
                        nulla venenatis, mollis ante non, dictum metus.
                        Phasellus a lacus finibus, venenatis lectus ac, volutpat
                        urna. Duis pellentesque malesuada bibendum. Maecenas
                        laoreet blandit lectus, et volutpat quam porttitor quis.
                        Donec massa nisi, feugiat quis imperdiet at, pretium ut
                        nunc. Aliquam nunc ante, consequat sed pellentesque ac,
                        congue sit amet tortor. Cras fermentum arcu non dictum
                        laoreet. Proin rutrum lacus ex, tempor consectetur
                        mauris vestibulum et.
                    </p>
                </section>
            </main>
        </>
    );
};

// SSG - Static Site Generation.
// Initialise Apollo Client cache with property posts data.
export async function getStaticProps() {
    const apolloClient = initializeApollo();

    // Fetch menus data.
    await apolloClient.query({
        query: GET_HEADER_MENUS,
    });
    await apolloClient.query({
        query: GET_FOOTER_MENUS,
    });

    // Fetch About page data.
    await apolloClient.query({
        query: POLICY_PAGE_QUERY,
    });

    return addApolloState(apolloClient, {
        props: {},
    });
}

export default Policy;
