
"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export function CompetitorAnalysis() {
  const [domain, setDomain] = useState('')
  const [results, setResults] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  const handleAnalysis = async () => {
    if (!domain.trim()) return
    
    setLoading(true)
    try {
      // Simulate API call for now
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      const mockResults = {
        domain: domain,
        trafficEstimate: Math.floor(Math.random() * 1000000) + 50000,
        domainAuthority: Math.floor(Math.random() * 40) + 50,
        backlinks: Math.floor(Math.random() * 50000) + 5000,
        topKeywords: [
          {
            keyword: 'digital marketing',
            position: Math.floor(Math.random() * 10) + 1,
            searchVolume: Math.floor(Math.random() * 20000) + 5000,
            traffic: Math.floor(Math.random() * 5000) + 500
          },
          {
            keyword: 'seo services',
            position: Math.floor(Math.random() * 10) + 1,
            searchVolume: Math.floor(Math.random() * 15000) + 3000,
            traffic: Math.floor(Math.random() * 3000) + 300
          },
          {
            keyword: 'online marketing',
            position: Math.floor(Math.random() * 10) + 1,
            searchVolume: Math.floor(Math.random() * 12000) + 2000,
            traffic: Math.floor(Math.random() * 2500) + 250
          }
        ],
        topPages: [
          {
            url: `/${domain}/blog/digital-marketing-guide`,
            traffic: Math.floor(Math.random() * 10000) + 1000,
            keywords: Math.floor(Math.random() * 100) + 20
          },
          {
            url: `/${domain}/services/seo`,
            traffic: Math.floor(Math.random() * 8000) + 800,
            keywords: Math.floor(Math.random() * 80) + 15
          }
        ]
      }
      
      setResults(mockResults)
    } catch (error) {
      console.error('Error fetching competitor data:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Competitor Analysis</CardTitle>
          <CardDescription>
            Enter a competitor's domain to analyze their SEO performance
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <Input
              placeholder="Enter domain (e.g., example.com)"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleAnalysis()}
              className="flex-1"
            />
            <Button onClick={handleAnalysis} disabled={loading}>
              {loading ? 'Analyzing...' : 'Analyze'}
            </Button>
          </div>
        </CardContent>
      </Card>

      {results && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Domain Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{results.trafficEstimate.toLocaleString()}</div>
                  <div className="text-sm text-muted-foreground">Monthly Traffic</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{results.domainAuthority}</div>
                  <div className="text-sm text-muted-foreground">Domain Authority</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">{results.backlinks.toLocaleString()}</div>
                  <div className="text-sm text-muted-foreground">Backlinks</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">{results.topKeywords.length}+</div>
                  <div className="text-sm text-muted-foreground">Top Keywords</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Top Keywords</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {results.topKeywords.map((keyword: any, index: number) => (
                  <div key={index} className="flex justify-between items-center p-3 border rounded-lg">
                    <div>
                      <div className="font-medium">{keyword.keyword}</div>
                      <div className="text-sm text-muted-foreground">
                        Position {keyword.position} • {keyword.searchVolume.toLocaleString()} searches/month
                      </div>
                    </div>
                    <Badge variant="outline">{keyword.traffic} visits</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Top Pages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {results.topPages.map((page: any, index: number) => (
                  <div key={index} className="p-3 border rounded-lg">
                    <div className="font-medium text-blue-600">{page.url}</div>
                    <div className="flex gap-4 text-sm text-muted-foreground mt-1">
                      <span>{page.traffic.toLocaleString()} monthly visits</span>
                      <span>{page.keywords} ranking keywords</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
