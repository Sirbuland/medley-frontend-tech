'use client'
import Pagination from "@/components/Pagination";
import Payouts from "@/components/Payouts";
import Search from "@/components/Search";
import { Container, FlexBox, Heading, InnerContainer } from "./page.style";
import { useCallback, useMemo, useState } from "react";
import HeaderTitle from "@/components/HeaderTitle";
import { MetaData, Payout } from "@/interface/payout";
import PayoutService from "@/services/payout";

const payoutService = new PayoutService();

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [payouts, setPayouts] = useState<Payout[]>([])
  const [searchTerm, setSearchTerm] = useState('');
  const [metaData, setMetaData] = useState<MetaData>({
    limit: 7,
    totalCount: 0
  })

  const fetchPayouts = useCallback(async (page: number = 1) => {
    setLoading(true);

    try {
      const params = {
        limit: metaData.limit,
        page,
      }

      const response = await payoutService.getPayouts(params)
      const { data, metadata } = response.data

      setPayouts(data)
      const calculatedTotalPages = Math.ceil(metadata.totalCount / metaData.limit);
      setMetaData({ ...metadata, totalPage: calculatedTotalPages })
    } catch (error) {
      setPayouts([])
      console.log('Error: while fetching payouts', error)
    } finally {
      setLoading(false);
    }
  }, [metaData])

  const searchPayouts = useCallback(async (searchValue: string) => {
    setLoading(true);
    try {
      const response = await payoutService.searchPayouts({ query: searchValue });
      const searchData = response?.data || [];

      setPayouts(searchData);

      const calculatedTotalPages = Math.ceil(searchData.length / metaData.limit);
      console.log(calculatedTotalPages)
      setMetaData({ ...metaData, totalPage: calculatedTotalPages - 1, page: 1 });

    } catch (error) {
      setPayouts([]);
      console.log('Error: while searching payouts', error);
    } finally {
      setLoading(false);
    }
  }, [metaData]);

  const onPageChange = useCallback((page: number, value?: string) => {
    if (page > 1 && value) {
      setMetaData(prevData => ({ ...prevData, page }))
      return;
    }

    if (value) {
      searchPayouts(value)
    } else {
      fetchPayouts(page)
    }
    // eslint-disable-next-line
  }, [])

  const filterdData = useMemo(() => {
    if (searchTerm) {
      const startingIndex = (metaData.page === 1 ? 0 : metaData.page!) * metaData.limit;

      return payouts.slice(startingIndex, startingIndex + metaData.limit)
    }

    return payouts;
  }, [metaData.limit, metaData.page, searchTerm, payouts])

  return (
    <main>
      <Container>
        <Heading>Payouts</Heading>
        <InnerContainer>
          <FlexBox>
            <HeaderTitle>Payout History</HeaderTitle>
            <Search
              name="search"
              value={searchTerm}
              onChange={(value) => { setSearchTerm(value); onPageChange(1, value)}}
              placeholder="Search...."
            />
          </FlexBox>

          <Payouts data={filterdData} loading={loading} />

          {!loading &&
            (
              <Pagination
                totalPages={metaData.totalPage!}
                currentPage={metaData.page!}
                onPageChange={(page: number) => onPageChange(page, searchTerm)}
              />
            )}
        </InnerContainer>
      </Container>

    </main>
  )
}
